#remove urls, digits, retweet tag & user name, hashtag
import re
import csv
import string
import nltk
import pandas as pd
nltk.download('wordnet')
from nltk.corpus import wordnet as wn
from nltk.stem.wordnet import WordNetLemmatizer
from collections import Counter

#To create clean file contain tweets after cleaning from region csv file

def preprocessing(filename):
    # filename = '2017_08_25_stream'
    # csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '.csv'
    new_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_region.csv'
    new_clean_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_cleaning.csv'
    needs_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_needs.csv'

    url_pattern = r'((http|https)\S+)' #S= represents all non-space characters until it hits the first space
    rt_pattern = r'\brt\b'
    name_pattern = r'@ \w+'
    hashtag_pattern = r'#\w+'

    def remove_extra(tweet):
        tweet = re.sub(url_pattern, ' ', tweet)
        tweet = re.sub(r'\d', '', tweet)
        tweet = re.sub(rt_pattern, '', tweet)
        tweet = re.sub(name_pattern, '', tweet)
        tweet = re.sub(hashtag_pattern, '', tweet)
        return tweet

    def remove_non_ascii(tweet):
        return ''.join(i for i in tweet if ord(i) < 128)

    def get_lemma(word):
        lemma = wn.morphy(word)
        #use morphy to search words not in wordnet
        if lemma is None:
            return word
        else:
            return lemma

    def get_lemma2(word):
        return WordNetLemmatizer().lemmatize(word)

    en_stop = set(nltk.corpus.stopwords.words('english'))

    def remove_common_word(text):
        common_word = []

    #non_ascii, url, punctuation, token，lemma,
    def prepare_text_for_lda(text):
        text = remove_non_ascii(text)
        text = remove_extra(text)
        text = text.lower()
        #remove punctuation for unicode
        #translate_table = dict((ord(char), None) for char in string.punctuation)
        text = text.translate(str.maketrans('', '', string.punctuation))
        tokens = nltk.word_tokenize(text)
        tokens = [token for token in tokens if token not in en_stop]
        tokens = [get_lemma(token) for token in tokens]
        # print(tokens)
        return tokens

    tweet_clean = []
    tweet_token = []

    def clean_tweet():
        df_csv = pd.read_csv(new_csv_path, header=None)
        for index, row in df_csv.iterrows():
            tweet = row[1]
            tokens = prepare_text_for_lda(tweet)
            clean_token = []
            for i in range(len(tokens)):
                if len(tokens[i]) < 3:
                    continue
                clean_token.append(tokens[i])
            clean_token = ' '.join(clean_token)
            if len(clean_token) > 0:
                tweet_clean.append(clean_token)
            else:
                tweet_clean.append('')

        with open(new_csv_path, 'r', encoding="utf-8_sig") as csv_reader:
            rows = csv.reader(csv_reader)
            with open(new_clean_csv_path, 'w', newline='', encoding="utf-8_sig") as csv_writer:
                out_csv = csv.writer(csv_writer)
                i = 0
                for row in rows:
                    row.insert(2, tweet_clean[i])
                    clean_tweet = row[2]
                    if len(clean_tweet) > 1: #write the row which clean_tweet is not empty
                        out_csv.writerow(row)
                    i += 1
            csv_writer.close()
        csv_reader.close()

    def count_frequency(tweet_clean):
        # count the word frequency
        tweet_tokens = [i for k in tweet_clean for i in k]
        # counter = Counter(tweet_tokens).most_common(15)
        counter = Counter(tweet_tokens)
        return counter

    def write_header():
        # write header
        with open(new_clean_csv_path, newline='', encoding="utf-8_sig") as f:
            r = csv.reader(f)
            data = [line for line in r]
            with open(new_clean_csv_path, 'w', newline='', encoding="utf-8_sig") as f:
                w = csv.writer(f)
                csv_header = ['tweet_id', 'tweet', 'clean_tweet', 'time', 'location', 'username', 'city', 'state', 'bounding_box',
                              'dist_num', 'regionName']
                w.writerow(csv_header)
                w.writerows(data)

    def main():
        clean_tweet()
        # find_needsInRegion()
        # write_header()
    main()

def autoFileRun():
    files = ['2017_08_23_stream', '2017_08_24_stream', '2017_08_25_stream', '2017_08_26_stream', '2017_08_27_stream',
            '2017_08_28_stream', '2017_08_29_stream', '2017_08_30_stream', '2017_09_01_stream']
    for file in files:
        preprocessing(file)

# autoFileRun()
preprocessing('2017_08_31_stream')