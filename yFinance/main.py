import pandas as pd
import yfinance as yf

sp_wiki_url = 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies'
sp_wiki_df_list = pd.read_html(sp_wiki_url)

len(sp_wiki_df_list)

sp_df = sp_wiki_df_list[0]
sp_ticker_list = list(sp_df['Symbol'].values)

df = yf.download(sp_ticker_list)

adj_close = df['Adj Close']

print(adj_close)