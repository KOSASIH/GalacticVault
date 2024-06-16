import spacy

nlp = spacy.load("en_core_web_sm")

class EntityRecognition:
    def __init__(self):
        pass

    def recognize(self, text):
        doc = nlp(text)
        entities = [(entity.text, entity.label_) for entity in doc.ents]
        return entities

    def get_entity_types(self, entities):
        entity_types = set(entity[1] for entity in entities)
        return entity_types

    def get_entities_by_type(self, entities, entity_type):
        entities_by_type = [entity[0] for entity in entities if entity[1] == entity_type]
        return entities_by_type

# Example usage
er = EntityRecognition()
text = "Apple is a technology company founded by Steve Jobs and Steve Wozniak."
entities = er.recognize(text)
print("Entities:", entities)
print("Entity types:", er.get_entity_types(entities))
print("Entities by type (PERSON):", er.get_entities_by_type(entities, "PERSON"))
