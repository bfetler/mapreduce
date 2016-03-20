# map-reduce on dataframes: apply, filter, select, sort,
#   sum, cumsum, describe, etc.

import pandas as pd

df1 = pd.DataFrame({'state': ['NY', 'VT', 'CA', 'CO', 'TX'], \
               'population': [19.4, 0.63, 37.3, 5.0, 25.1]})
# estimate for state population in millions, 2010 census

# map
df1['pop_projected_2018'] = df1['population'].apply(lambda x: x * 1.2)
print("dataframe:\n", df1)

# filter
df2 = df1[df1['population'] > 15]
print("dataframe pop > 15:\n", df2)

df2 = df1.query('population>15')
print("dataframe pop > 15:\n", df2)

# chained filter
df2 = df1[df1['state'] > 'H'].query('population>15')
print("dataframe state>'H' and pop > 15:\n", df2)

# reduce: real number sum, string sum
print("dataframe sum\n", df1.sum())


# fun
df2 = df1.cumsum()   # is this more a map or reduce op?  map
print("dataframe cumulative sum:\n", df2)

# Q: are other methods more a map, filter, or reduce operation?
#    or a combination of them?
#      any, all, applymap, count, cumsum, describe, ffill,
#      fillna, isnull, iteritems, join, mean, std, max, min, 
#      quantile, sort, etc.


