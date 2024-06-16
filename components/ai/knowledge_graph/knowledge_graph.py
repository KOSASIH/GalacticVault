	+ **knowledge_graph**
		- `knowledge_graph.py` ```python
import rdflib

class KnowledgeGraph:
    def __init__(self):
        self.graph = rdflib.Graph()

    def add_triple(self, subject, predicate, object):
        self.graph.add((subject, predicate, object))

    def query(self, query):
        return self.graph.query(query)
