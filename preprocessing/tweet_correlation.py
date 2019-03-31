import csv
import sys
import operator
import pandas as pd
from collections import defaultdict
from collections import Counter

# filename = '2017_08_25_stream'
# csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '.csv'
# new_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_region.csv'
# new_clean_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/'+ filename + '_cleaning.csv'


# find their need through tweet_correlation

pd.set_option('display.max_rows', 1000)

# remember to include the other import from the previous post
com = defaultdict(lambda: defaultdict(int))

# f is the file pointer to the JSON data set
def autoFileRun():
    files = ['2017_08_23_stream', '2017_08_24_stream', '2017_08_25_stream', '2017_08_26_stream', '2017_08_27_stream',
            '2017_08_28_stream', '2017_08_29_stream', '2017_08_30_stream', '2017_09_01_stream']
    terms_only = []
    for filename in files:
        new_clean_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_cleaning.csv'
        with open(new_clean_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
            rows = csv.reader(csv_reader)
            for row in rows:
                clean_text = row[2]
                # clean_text = clean_text.replace(' ', ',').split(',')
                clean_text = clean_text.split()
                terms_only.append(clean_text)
    return terms_only

def build_cor(search_word):
    terms_only = autoFileRun()
    # Build co-occurrence matrix
    for h in range(len(terms_only)):
        for i in range(len(terms_only[h]) - 1):
            for j in range(i + 1, len(terms_only[h])):
                w1, w2 = sorted([terms_only[h][i], terms_only[h][j]])
                if w1 != w2:
                    com[w1][w2] += 1
                    com[w2][w1] += 1

    com_max = []
    # For each term, look for the most common co-occurrent terms
    for t1 in com:
        t1_max_terms = sorted(com[t1].items(), key=operator.itemgetter(1), reverse=True)[:5]
        for t2, t2_count in t1_max_terms:
            com_max.append(((t1, t2), t2_count))
    # Get the most frequent co-occurrences
    terms_max = sorted(com_max, key=operator.itemgetter(1), reverse=True)
    # print(terms_max[:5000])

    max = 10000
    search_word = search_word
    rela_search_word = []
    freq_search_word = []
    for i in range(max):
        freq = terms_max[:max][i][1]
        if search_word == terms_max[:max][i][0][0]:
            rela_word = terms_max[:max][i][0][1]
            rela_search_word.append(rela_word)
            freq_search_word.append(freq)
        elif search_word == terms_max[:max][i][0][1]:
            rela_word = terms_max[:max][i][0][0]
            rela_search_word.append(rela_word)
            freq_search_word.append(freq)
    cor_search_word = dict(zip(rela_search_word, freq_search_word))
    # print(cor_search_word)
    # cor_word = [cor_search_word()]
    return cor_search_word

def writer():
    ori_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/needs_freq.csv'
    final_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/needs_final.csv'
    with open(ori_path, encoding="utf-8_sig") as csv_reader:
        rows = csv.reader(csv_reader)
        with open(final_path, 'w', newline='', encoding="utf-8_sig") as csv_writer:
            out_csv = csv.writer(csv_writer)
            row = []
            for row in rows:
                search_word = row[0]
                cor_search_word = build_cor(search_word)
                row.append(cor_search_word)
                out_csv.writerow(row)
        csv_writer.close()
    csv_reader.close()

writer()
