import csv

all_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/All_Dataset.csv'
days = ["0823", "0824", "0825", "0826", "0827", "0828", "0829", "0830", "0831", "0901"]

with open(all_output_csv_path, 'r', encoding="utf-8_sig") as csv_reader:
    rows = csv.reader(csv_reader)
    my_dict = {}
    dist = locals()
    for day in days:
        my_dict[str(day)] = {}
        for hour in range(24):
            if hour < 10:
                hour = '0' + str(hour)
            my_dict[str(day)][str(hour)] = {}
            for dist_num in range(1, 89):
                my_dict[str(day)][str(hour)][str(dist_num)] = {}
                for i in range(2):
                    my_dict[str(day)][str(hour)][str(dist_num)][str(i)] = 0
    # print(my_dict)
    # num = my_dict['0823']['00']['1']['1']
    # num += 1
    # my_dict['0823']['00']['1']['1'] = num
    # print(my_dict['0823']['00']['1']['1'])
    for row in rows:
        userId = row[0]
        tweet = row[1]
        dist_num = row[2]
        region = row[3]
        timestamp = row[4]
        day = row[5]
        hour = row[6]
        needs = row[7]
        count = row[8]
        needs_sum = row[9]
        if len(needs) > 0:
            num1 = my_dict[day][hour][dist_num]['1']
            num1 += 1
            my_dict[day][hour][dist_num]['1'] = num1
        else:
            num0 = my_dict[day][hour][dist_num]['0']
            num0 += 1
            my_dict[day][hour][dist_num]['0'] = num0
    for i in range(24):
        if i < 10:
            i = '0' + str(i)
        else:
            i = str(i)
        print(my_dict['0823'][i]['1'])

csv_reader.close()
