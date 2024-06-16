import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

class TimeSeriesForecasting:
    def __init__(self, series):
        self.series = series

    def fit_model(self):
        model = ARIMA(self.series, order=(5,1,0))
        model_fit = model.fit()
        return model_fit

    def forecast(self, model_fit, num_steps):
        forecast = model_fit.forecast(steps=num_steps)
        return forecast

# Example usage
series = pd.read_csv('series.csv', index_col='date', parse_dates=['date'])
forecaster = TimeSeriesForecasting(series)
model_fit = forecaster.fit_model()
forecast = forecaster.forecast(model_fit, 30)
print(forecast)
