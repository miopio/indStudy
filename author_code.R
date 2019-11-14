# First set the working directory to the location of this script
setwd("~/Google Drive/Parsons/indStudy/lukeholman_gendergap")

library(RISmed)
library(dplyr)

for(i in test_titles){
  search_topic <- paste0(i, "[TA]")
  print(search_topic)
  search_query <- EUtilsSummary(search_topic, retmax = 100)
  records <- EUtilsGet(search_query, type = "efetch", db = "pubmed")
  
  # slotNames(big) # list all names of paper annotations
  data <- data.frame('pmid'=PMID(records), 
                     'abstract'= AbstractText(records), 
                     'year'=YearPubmed(records), 
                     'title'=ArticleTitle(records),
                     'journal'=Title(records), 
                     'country'=Country(records))
  write.table(data, file=paste(i, "-data.csv", sep=""), row.names=FALSE, col.names=TRUE, quote=FALSE)


#AUTHORS AND AFFILIATIONS TABLE
ll <- length(PMID(records))

coauthors <- data.frame(Author(records)[[1]])
coauthors$pmid=PMID(records)[1]
ifelse(nrow(coauthors) == length(Affiliation(records)[[1]]), 
  coauthors$affiliation<-Affiliation(records)[[1]], coauthors$affiliation<-"NA")
coa <- data.frame('pmid'=coauthors$pmid, 'ForeName'=coauthors$ForeName, 
                  'LastName' = coauthors$LastName, 'Initials' = coauthors$Initials,
                  'order'=coauthors$order, 'Affiliation' = coauthors$affiliation)
## sometimes affiliations have more affiliations than the given number of authors, which is
## why an error appears

for(j in 2:ll){
  coauthors <- data.frame(Author(records)[[j]])
  coauthors$pmid=PMID(records)[j]
  ifelse(nrow(coauthors) == length(Affiliation(records)[[j]]), 
         coauthors$affiliation<-Affiliation(records)[[j]], coauthors$affiliation<-"NA")
  coa<-bind_rows(coa,data.frame('pmid'=coauthors$pmid, 'ForeName'=coauthors$ForeName, 
                            'LastName' = coauthors$LastName, 'Initials' = coauthors$Initials,
                            'order'=coauthors$order, 'Affiliation' = coauthors$affiliation))
}
write.table(coa,file=paste(i, "-authors.csv", sep=""), row.names=FALSE, col.names=TRUE, quote=FALSE)

#MESH TERMS TABLE
mesh_terms <- data.frame(Mesh(records)[[1]])
#mesh_terms <- data.frame(Mesh$Mesh[1])
mesh_terms$pmid = PMID(records)[1]
ifelse(is.na(mesh_terms[1]), 
       mesh<- data.frame('pmid'=mesh_terms$pmid, 'mesh'="NA"), 
       mesh <- data.frame('pmid'=mesh_terms$pmid, 'mesh'=mesh_terms$Heading))

for(k in 2:ll){
  mesh_terms <- data.frame(Mesh(records)[[k]])
  mesh_terms$pmid = PMID(records)[k]
  ifelse(is.na(mesh_terms[1]), mesh<- rbind(mesh, data.frame('pmid'=mesh_terms$pmid, 'mesh'="NA")), 
  mesh<- rbind(mesh, data.frame('pmid'=mesh_terms$pmid, 'mesh'=mesh_terms$Heading)))
  }
  
write.table(mesh,file=paste(i, "-mesh.csv", sep=""), row.names=FALSE, col.names=TRUE, quote=FALSE)
}
