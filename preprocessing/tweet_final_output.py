import pandas as pd
import csv


def timeCount(content):
    count = locals()
    timesByRegByHr = []
    for i in range(24):
        count[str(i)] = 0
    for row in content:
        hms = row[3].split()[3]
        hms_list = hms.split(':')
        if hms_list[0] == '00':
            count['0'] += 1
        elif hms_list[0] == '01':
            count['1'] += 1
        elif hms_list[0] == '02':
            count['2'] += 1
        elif hms_list[0] == '03':
            count['3'] += 1
        elif hms_list[0] == '04':
            count['4'] += 1
        elif hms_list[0] == '05':
            count['5'] += 1
        elif hms_list[0] == '06':
            count['6'] += 1
        elif hms_list[0] == '07':
            count['7'] += 1
        elif hms_list[0] == '08':
            count['8'] += 1
        elif hms_list[0] == '09':
            count['9'] += 1
        elif hms_list[0] == '10':
            count['10'] += 1
        elif hms_list[0] == '11':
            count['11'] += 1
        elif hms_list[0] == '12':
            count['12'] += 1
        elif hms_list[0] == '13':
            count['13'] += 1
        elif hms_list[0] == '14':
            count['14'] += 1
        elif hms_list[0] == '15':
            count['15'] += 1
        elif hms_list[0] == '16':
            count['16'] += 1
        elif hms_list[0] == '17':
            count['17'] += 1
        elif hms_list[0] == '18':
            count['18'] += 1
        elif hms_list[0] == '19':
            count['19'] += 1
        elif hms_list[0] == '20':
            count['20'] += 1
        elif hms_list[0] == '21':
            count['21'] += 1
        elif hms_list[0] == '22':
            count['22'] += 1
        elif hms_list[0] == '23':
            count['23'] += 1

    for i in range(24):
        timesByRegByHr.append(count[str(i)])
        # print(count[str(i)])
    # print(timesByRegByHr)
    return timesByRegByHr

def find_hours(content):
    datetime = content[3]
    hms = datetime.split()[3]
    hms_list = hms.split(':')
    return hms_list[0]

def final_output(filename):
    need_by_region_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_needByRegion.csv'
    final_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_final_output_test.csv'
    new_final_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_new_final_output_test.csv'
    matrix = [[0 for i in range(89)] for i in range(25)]
    with open(need_by_region_path, 'r', encoding='utf-8_sig') as csv_reader:
        rows = csv.reader(csv_reader)
        with open(final_output_csv_path, 'w', newline="", encoding="utf-8_sig") as csv_writer:
            out_csv = csv.writer(csv_writer)
            day = filename.split("_")[1] + filename.split("_")[2]
            for row in rows:
                features = []
                tweet = row[1]
                timestamp = row[3]
                userId = row[5]
                hour = find_hours(row)
                dist_num = row[9]
                region = row[10]
                needs = row[11]
                needs_sum = row[12]
                features.append(userId)
                features.append(tweet)
                features.append(dist_num)
                features.append(region)
                features.append(timestamp)
                features.append(day)
                features.append(hour)
                features.append(needs)
                features.append(needs_sum)
                matrix[int(hour)][int(dist_num)] += int(needs_sum)
                out_csv.writerow(features)
        csv_writer.close()
    csv_reader.close()

    with open(final_output_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
        rows = csv.reader(csv_reader)
        with open(new_final_output_csv_path, 'w', newline="", encoding="utf-8_sig") as csv_writer:
            out_csv = csv.writer(csv_writer)
            row = []
            for row in rows:
                hour = row[6]
                dist_num = row[2]
                count = matrix[int(hour)][int(dist_num)]
                row.append(count)
                out_csv.writerow(row)
        csv_writer.close()
    csv_reader.close()

def write_header(filename):
    new_final_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_new_final_output.csv'
    # write header
    with open(new_final_output_csv_path, 'r', encoding="utf-8_sig") as f:
        r = csv.reader(f)
        data = [line for line in r]
        with open(new_final_output_csv_path, 'w', newline='', encoding="utf-8_sig") as f:
            w = csv.writer(f)
            csv_header = ['userId', 'tweet', 'dist_num', 'region', 'day', 'hour', 'needs', 'needs_sum', 'count']
            w.writerow(csv_header)
            w.writerows(data)

def autoFileRun():
    files = ['2017_08_23_stream', '2017_08_24_stream', '2017_08_25_stream', '2017_08_26_stream', '2017_08_27_stream',
             '2017_08_28_stream', '2017_08_29_stream', '2017_08_30_stream', '2017_09_01_stream']
    for file in files:
        final_output(file)
        # write_header(file)
# autoFileRun()
final_output('2017_08_31_stream')






