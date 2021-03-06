# Map-On Ontology Mapping environment
Map-On is a web-based editor for visual ontology mapping developed at the Architecture, Representation and Computation research group of La Salle, Ramon Llull University. The Map-On editor provides a graphical environment for the ontology mapping creation using an interactive graph layout. A point-and-click interface simplifies the mapping creation process. The editor automatically generates a R2RML document based on user inputs, particularly producing IRI patterns and SQL queries. It has been used in real scenarios alleviating the effort of coding R2RML statements which is one of the main barriers for adopting R2RML in research and in the industry communities.

The Map-On features:
-	Multiuser web environment for manual creation of relational-to-ontology mappings.
-	Mapping spaces for distribution of the mapping creation process.
-	Top-down visual representation of relational source schema, ontology structure, and mappings based on a graph layout which can be customised by users.
-	Visual representation of an ontology using [WebVOWL](https://github.com/VisualDataWeb/WebVOWL) and a relational source based on Entity-Relationship diagrams.
-	Input relational sources can be a SQL database or a tabular source such as comma separated values (CSV) file.
-	Support of R2RML recommendation. 
-	R2RML documents generated by [AutoMap4OBDA](https://github.com/arc-lasalle/AutoMap4OBDA) can be imported in Map-On. 
-	Automated generation of IRI patterns and SQL queries based on mappings defined by users.
-	Dialog window in input boxes with suggestions of elements to be used in the mappings based on the text introduced by users.
-	Point-and-click interface for reducing the effort required for mapping activities .
-	Ontology-driven mapping approach, where the mapping process starts from the ontology instead of working with the database.
-	Contextual menus to help users in mapping creation.
-	Log of the activities carried out by users.
-	Pop-ups with tips as an integrated help.

http://semanco-tools.eu/map-on

http://arc.salleurl.edu/

Map-On tool has been developed in PHP using the framework Code Igniter. The graphical ontology representation has been implement using the VivaGraphJS library and ARC to parse RDF files. The mapping file generated is written in the R2RML Mapping Language.

- CodeIgniter, Open source PHP web application framework – http://codeigniter.com
- Graph drawing library for JavaScript – https://github.com/anvaka/VivaGraphJS
- Text editor implemented in JavaScript with turtle syntax style – http://codemirror.net/
- ARC, Appmosphere RDF classes – https://github.com/semsol/arc2/wiki
- R2RML: RDB to RDF Mapping Language – http://www.w3.org/TR/r2rml/

For the Map-On installation please go to the [Installation guide](./docs/installation.md)

Please cite Map-On with the following reference:

>Sicilia, Álvaro; Nemirovski, German; Nolle, Andreas. [Map-on: A web-based editor for visual ontology mapping](http://www.semantic-web-journal.net/system/files/swj1266.pdf). Semantic Web, vol. 8, no. 6, pp. 969-980, 2017.

Copyright (C) 2017 ARC Engineering and Architecture La Salle, Ramon Llull University.
 
for comments please contact Alvaro Sicilia (ascilia@salleurl.edu)
