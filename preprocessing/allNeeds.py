import csv
from collections import Counter

def count_frequency(tweet_clean):
    # count the word frequency
    tweet_tokens = [i for k in tweet_clean for i in k]
    # counter = Counter(tweet_tokens).most_common(15)
    counter = Counter(tweet_tokens)
    return counter

def find_needsByDay(filename):
    new_clean_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_cleaning.csv'
    with open(new_clean_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
        rows = csv.reader(csv_reader)
        data = []
        for row in rows:
            clean_tweet = row[2].split(' ')
            data.append(clean_tweet)
        counter = count_frequency(data)
    return counter

def find_needs():
    needs_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/needs.csv'
    with open(needs_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
        rows = csv.reader(csv_reader)
        needs = []
        for row in rows:
            need = row[0]
            needs.append(need)
        # print(needs)
        return needs

def autoFileRun():
    files = ['2017_08_23_stream', '2017_08_24_stream', '2017_08_25_stream', '2017_08_26_stream', '2017_08_27_stream',
            '2017_08_28_stream', '2017_08_29_stream', '2017_08_30_stream', '2017_09_01_stream']

    allCounter = Counter()
    for file in files:
        counter = find_needsByDay(file)
        # print(counter)
        allCounter = allCounter + counter

    needsAllCount = allCounter.most_common(2000)
    # print(needsAllCount)
    needs_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/needs.csv'
    needs_freq_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/needs_freq.csv'
    with open(needs_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
        rows = csv.reader(csv_reader)
        with open(needs_freq_csv_path, 'w', newline='', encoding='utf-8_sig') as csv_writer:
            out_csv = csv.writer(csv_writer)
            row = []
            for row in rows:
                need = row[0]
                for i in range(2000):
                    needs_count = needsAllCount[i][1]
                    if need == needsAllCount[i][0]:
                        row.append(needs_count)
                        break
                    if i == 1999:
                        # print(need, 0)
                        row.append(0)
                out_csv.writerow(row)
        csv_writer.close()
    csv_reader.close()


# autoFileRun()

# needs = ['water', 'help', 'need', 'people', 'store', 'safe', 'home', 'flood', 'family', 'school', 'nurse', 'support', 'donate', 'food', 'service', 'call', 'rescue', 'donation', 'relief', 'shelter', 'volunteer', 'community', 'boat', 'money', 'victim', 'supply', 'car', 'power', 'restaurant', 'emergency', 'truck', 'dog', 'gas', 'damage', 'contact', 'wine', 'text', 'beer', 'grocery', 'tank', 'clothes', 'trail', 'fund', 'bottle', 'assistance', 'oil', 'advisory', 'cable']
