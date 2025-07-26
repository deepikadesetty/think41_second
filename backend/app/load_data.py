import pandas as pd
from app.database import SessionLocal
from app import models
session=SessionLocal()
def load_csv_to_table(file,Model):
    df=pd.read_csv(file)
    for _, row in df.iterrows():
        session.add(Model(**row.to_dict()))
        session.commit()
if __name__=='__main__':
    load_csv_to_table('app/data/distribution_centers.csv',models.DistributionCenter)
    load_csv_to_table('app/data/distribution_centers.csv',models.Product)
    load_csv_to_table('app/data/distribution_centers.csv',models.InventoryItem)
    load_csv_to_table('app/data/distribution_centers.csv',models.Order)
    load_csv_to_table('app/data/distribution_centers.csv',models.OrderItem)
    load_csv_to_table('app/data/distribution_centers.csv',models.User)