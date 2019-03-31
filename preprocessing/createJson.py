import csv

# test = [['store', 1],
    #         ['safe', 1, 'need', 1, 'school', 1, 'service', 1, 'flood', 1, 'people', 1, 'water', 1, 'grocery', 1, 'community', 1, 'store', 1],
    #         ['victim', 2, 'safe', 1, 'family', 1, 'school', 1, 'flood', 1, 'restaurant', 1, 'store', 1, 'grocery', 1],
    #         ['trail', 1, 'school', 1, 'restaurant', 1, 'money', 3, 'water', 2, 'store', 1, 'community', 1],
    #         ['donate', 1, 'safe', 1, 'nurse', 1, 'assistance', 1, 'need', 1, 'support', 1, 'home', 2, 'flood', 1, 'water', 5, 'help', 1, 'emergency', 1, 'call', 1],
    #         ['volunteer', 1, 'dog', 1, 'need', 1, 'home', 1, 'flood', 1, 'water', 3, 'shelter', 1, 'help', 3],
    #         ['rescue', 1, 'victim', 1, 'donation', 1, 'safe', 3, 'volunteer', 3, 'nurse', 1, 'power', 1, 'need', 2, 'assistance', 1, 'home', 1, 'food', 2, 'water', 4, 'supply', 1, 'shelter', 1, 'help', 1, 'emergency', 1],
    #         ['relief', 1, 'safe', 1, 'donation', 1, 'family', 1, 'need', 3, 'home', 1, 'food', 1],
    #         ['donate', 1, 'relief', 1, 'donation', 1, 'fund', 1, 'wine', 1, 'family', 1, 'home', 1, 'food', 1, 'water', 1, 'people', 1]]


# filename = '2017_08_23_stream'
# final_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_final_output.csv'
# new_final_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_new_final_output.csv'
all_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/All_Dataset.csv'
# json_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/All_Dataset.json'
test_json_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/test1.json'
line_json_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/line_json.json'
stream_json_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/stream_json.json'

def remove_non_ascii(tweet):
    return ''.join(i for i in tweet if ord(i) < 128)


days = ["0823", "0824", "0825", "0826", "0827", "0828", "0829", "0830", "0831", "0901"]
# days = ["823", "824", "825", "826", "827", "828", "829", "830", "831", "901"]


def preJson():
    dict= {}
    userId_list = locals()
    tweet_list = locals()
    needs_list = locals()
    for day in days:
        dict[str(day)] = {}
        for hour in range(24):
            if hour < 10:
                hour = '0' + str(hour)
            dict[str(day)][str(hour)] = {}
            for dist_num in range(1, 89):
                # if dist_num < 10:
                #     dist_num = '0' + str(dist_num)
                dict[str(day)][str(hour)][str(dist_num)] = {}
                # dict[day][hour][dist_num] = []
                dict[str(day)][str(hour)][str(dist_num)]["userId"] = 0
                dict[str(day)][str(hour)][str(dist_num)]["tweet"] = 0
                dict[str(day)][str(hour)][str(dist_num)]["needs"] = 0
                dict[str(day)][str(hour)][str(dist_num)]["count"] = 0
                userId_list[str(day) + str(hour) + str(dist_num) + "user"] = []
                tweet_list[str(day) + str(hour) + str(dist_num) + "tweet"] = []
                needs_list[str(day) + str(hour) + str(dist_num) + "needs"] = []

    with open(all_output_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
        rows = csv.reader(csv_reader)
        for row in rows:
            userId = row[0]
            tweet = row[1]
            tweet = remove_non_ascii(tweet)  # remove special characters
            tweet = tweet.replace('\'', ' ')
            tweet = tweet.replace('\"', ' ')
            dist_num = row[2]
            region = row[3]
            # All_Dataset.csv add timestamp, so day = row[5]
            day = row[5]
            hour = row[6]
            needs = row[7].split()  # if needs more than two, split them by comma
            count = int(row[8])
            for i in range(int(hour), 24):
                if i < 10:
                    i = '0' + str(i)
                index = str(day) + str(i) + str(dist_num)
                userId_list[index+"user"].append(userId)
                tweet_list[index+"tweet"].append(tweet)
                if len(needs) > 1:
                    for j in range(len(needs)):
                        needs_list[index+"needs"].append(needs[j])
                if len(needs) == 1:
                    needs_list[index+"needs"].append(needs[0])
                dict[str(day)][str(i)][str(dist_num)]["count"] += count

        for day in days:
            for hour in range(24):
                if hour < 10:
                    hour = '0' + str(hour)
                for dist_num in range(1, 89):
                    index = str(day) + str(hour) + str(dist_num)
                    dict[str(day)][str(hour)][str(dist_num)]["userId"] = userId_list[index + "user"]
                    dict[str(day)][str(hour)][str(dist_num)]["tweet"] = tweet_list[index + "tweet"]
                    dict[str(day)][str(hour)][str(dist_num)]["needs"] = needs_list[index + "needs"]
    return dict

def write_map_json(data, json_file):
    with open(json_file, "w") as f:
        # my_json = "{'823': {'0': {'1': {'userId': ['DjRed_ScrewedUp'], 'tweet': ['#SoundCloud #CheckMeOut #LinkInMyBio  @ Houston, Texas https://t.co/v3O7wZl8KW'], 'needs': [], 'count': 0}}}}"
        f.write(str(data))

# choropleth map data in json
# my_dict = preJson()
# write_map_json(my_dict, test_json_path)

## Find need freq by day for Line and Stream
my_dict = preJson()
def find_freq(dist_num):
    final_needs = []  # not use yet
    day_need = []  # store the needs without freq
    all_needs = []  # store the needs by single list format
    for day in days:
        one_needs = []  # store the needs with freq
        one_need = my_dict[str(day)]["23"][str(dist_num)]["needs"]
        one_need_set = sorted(set(one_need), key=one_need.index)  # keep it in sequence after converting list to set
        for need in one_need_set:
            one_needs.append(need)
            one_needs.append(one_need.count(need))
        day_need.append(one_needs)

        for need in range(len(one_need)):
            sig_need = []  # single need convert into single list
            sig_need.append(one_need[need])
            all_needs.append(sig_need)

    all_needs = list(set([tuple(t) for t in all_needs]))  # remove repeating elements
    all_needs = [list(v) for v in all_needs]

    for need in range(len(all_needs)):  # check every need in day_need, if in, add its freq; else add 0
        for t in range(len(day_need)):
            if all_needs[need][0] in day_need[t]:  # all_needs[need]: ['need']; all_needs[need][0]: need
                index = day_need[t].index(all_needs[need][0])
                all_needs[need].append(day_need[t][index+1])
            else:
                all_needs[need].append(0)
    return all_needs


def line_needs_freq():  # add needs_freq by region for line graph
    # my_dict = preJson()
    line_all_region_data = []
    for i in range(1, 89):
        line_region_data = {}
        line_region_data['region_id'] = i
        line_region_data['needs_frequency'] = find_freq(i)
        line_all_region_data.append(line_region_data)
    # print(line_all_region_data)
    return line_all_region_data

## Write Line_Graph json file
def write_line_json(data, json_file):
    with open(json_file, "w") as f:
        f.write(str(data))

my_region_data = line_needs_freq()
write_line_json(my_region_data, line_json_path)

def stream_needs_freq():
    labels = ["2017-8-23", "2017-8-24", "2017-8-25", "2017-8-26", "2017-8-27",
              "2017-8-28", "2017-8-29", "2017-8-30", "2017-8-31", "2017-9-01"]
    stream_region_data = {}
    for i in range(1, 89):
        stream_region_data[str(i)] = {}
        stream_region_data[str(i)]['labels'] = labels
        # print(find_freq(1))
        # print(len(find_freq(1)))
        # print(find_freq(1)[0])
        # print(find_freq(1)[0].pop(0))
        # break
        temp = find_freq(i)
        all_datasets = []
        for j in range(len(temp)):
            datasets = {}
            need = temp[j][0]
            data = temp[j][1:]
            datasets["label"] = need
            datasets['data'] = data
            all_datasets.append(datasets)
            # all_datasets.append(data)
        top_needs = pick_needs(all_datasets)
        # print(top_needs)
        # break
        stream_region_data[str(i)]["datasets"] = top_needs
    print(stream_region_data)

def pick_needs(all_datasets):
    top = {}
    top_needs = []
    num = 10
    dataset_len = len(all_datasets)
    for i in range(dataset_len):
        one_data = all_datasets[i]['data']
        sum = 0
        for j in range(len(one_data)):
            sum += one_data[j]
        top[all_datasets[i]['label']] = sum
        # top.append(sum)
    order = sorted(top.items(), key=lambda item: item[1], reverse = True )
    # print(order[:10])
    if dataset_len < num:
        top_needs = all_datasets
    else:
        for k in range(num):
            rank_need = order[:num][k][0]
            for i in range(len(all_datasets)):
                if rank_need == all_datasets[i]['label']:
                    top_needs.append(all_datasets[i])
    return top_needs

# pick_needs(all_datasets)
# stream_needs_freq()





