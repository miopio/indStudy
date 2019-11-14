# indStudy
 women in neuro

###data
I've incorporated csv and tsv files of my output now (this is a small sample of n=100 from the journal Neuron). The format should be the following:

####data
- pmid
- abstract
- year
- title
- journal
- country

####authors
- pmid
- ForeName
- LastName
- Initials
- order
- Affiliation

####mesh
- pmid
- mesh


###R environments
neuro_journals.RData: my initial environment, with the data saved as lists within the environment. The lists are organized by journal. Also this environment makes my laptop go super slow so advance warning.

neuro_journals_flattened.RData: my current environment using the new flattening script

###Scripts
author_code.R: this has my script for obtaining the data in a flattened format. Theoretically I'm doing something wrong in here to make my files wonky.
