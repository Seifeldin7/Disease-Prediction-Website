import joblib
import numpy as np
import os
class Classifier:
    def __init__(self, data, disease):
        self.disease =  disease
        self.data = data
        if self.disease.find('Liver') != -1:
            filename = read_file('Liver/liver_model.pkl')
        elif self.disease.find('Kidney') != -1:
            filename = read_file("Kidney/kidney_model.pkl")
        elif self.disease.find('Heart') != -1:
            filename = read_file("Heart/heart_model.pkl")
        elif self.disease.find('Diabetes') != -1:
            filename = read_file("Diabetes/diabetes_model.pkl")
        elif self.disease.find('BreastCancer') != -1:
            filename = read_file("BreastCancer/cancer_model.pkl")
        self.model = joblib.load(filename)

    def predict(self):
        to_predict_list = list(map(float, self.data))
        to_predict = np.array(to_predict_list).reshape(1,len(to_predict_list))
        return self.model.predict(to_predict)

    def read_file(relative_path):
        dirname = os.path.dirname(__file__)
        filename = os.path.join(dirname, relative_path)
        return filename