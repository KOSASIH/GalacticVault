import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

class RecommendationSystem:
    def __init__(self, ratings):
        self.ratings = ratings

    def build_matrix(self):
        user_item_matrix = pd.pivot_table(self.ratings, values='rating', index='user_id', columns='item_id')
        return user_item_matrix

    def calculate_similarities(self, user_item_matrix):
        similarity_matrix = cosine_similarity(user_item_matrix)
        return similarity_matrix

    def recommend(self, user_id, num_recommendations):
        user_item_matrix = self.build_matrix()
        similarity_matrix = self.calculate_similarities(user_item_matrix)
        user_similarities = similarity_matrix[user_id]
        top_similar_users = np.argsort(-user_similarities)[:num_recommendations]
        recommended_items = []
        for similar_user in top_similar_users:
            recommended_items.extend(user_item_matrix.columns[user_item_matrix.iloc[similar_user] > 0])
        return recommended_items

# Example usage
ratings = pd.DataFrame({'user_id': [1, 1, 2, 2, 3, 3], 'item_id': [1, 2, 1, 3, 2, 3], 'rating': [4, 5, 3, 4, 5, 3]})
recommender = RecommendationSystem(ratings)
recommended_items = recommender.recommend(1, 3)
print(recommended_items)
