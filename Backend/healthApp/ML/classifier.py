import joblib
import numpy as np
import os
class Classifier:
    def __init__(self, data, disease):
        self.disease =  disease
        self.data = data
        dirname = os.path.dirname(__file__)
        if self.disease.find('Liver') != -1:
            filename = os.path.join(dirname, 'Liver/liver_model.pkl')
        elif self.disease.find('Kidney') != -1:
            filename = os.path.join(dirname, 'Kidney/kidney_model.pkl')
        elif self.disease.find('Heart') != -1:
            filename = os.path.join(dirname, 'Heart/heart_model.pkl')
        elif self.disease.find('Diabetes') != -1:
            filename = os.path.join(dirname, 'Diabetes/diabetes_model.pkl')
        elif self.disease.find('BreastCancer') != -1:
            filename = os.path.join(dirname, 'BreastCancer/cancer_model.pkl')
        
        self.model = joblib.load(filename)

    def predict(self):
        to_predict_list = list(map(float, self.data))
        to_predict = np.array(to_predict_list).reshape(1,len(to_predict_list))  
        prediction = self.model.predict(to_predict)
        return prediction
