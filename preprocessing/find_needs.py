import csv

# filename = '2017_08_23_stream'

needs = ['water', 'help', 'need', 'people', 'store', 'safe', 'home', 'flood', 'family', 'school', 'nurse', 'support', 'donate', 'food', 'service', 'call', 'rescue', 'donation', 'relief', 'shelter', 'volunteer', 'community', 'boat', 'money', 'victim', 'supply', 'car', 'power', 'restaurant', 'emergency', 'truck', 'dog', 'gas', 'damage', 'contact', 'wine', 'text', 'beer', 'grocery', 'tank', 'clothes', 'trail', 'fund', 'bottle', 'assistance', 'oil', 'advisory', 'cable']

def find_needsInRegion(filename):
    new_clean_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_cleaning.csv'
    need_by_region_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_needByRegion.csv'

    # with open(final_clean_csv_path, 'r', encoding="utf-8_sig") as csv_reader:
    #     rows = csv.reader(csv_reader)
    #     with open(need_by_region_path, 'w', newline="", encoding="utf-8_sig") as csv_writer:
    #         out_csv = csv.writer(csv_writer)
    #         row = []
    #         for row in rows:
    #             # region_need = []
    #             # clean_tweet = row[2].split()
    #             # # for i in range(len(clean_tweet)):
    #             # for need in needs:
    #             #     if need in clean_tweet:
    #             #         region_need.append(need)
    #             # region_need = "".join(region_need)
    #             # row.append(region_need)
    #             # # print(row[11])
    #             # out_csv.writerow(row)
    #     csv_writer.close()
    # csv_reader.close()


    with open(new_clean_csv_path, 'r', encoding="utf-8_sig") as csv_reader:
        rows = csv.reader(csv_reader)
        with open(need_by_region_path, 'w', newline="", encoding="utf-8_sig") as csv_writer:
            out_csv = csv.writer(csv_writer)
            for row in rows:
                dist_num = row[9]
                if dist_num == '-1':
                    continue
                else:
                    region_need = []
                    clean_tweet = row[2].split()
                    need_count = 0
                    for need in needs:
                        if need in clean_tweet:
                            region_need.append(need)
                            need_count += 1
                    region_need = " ".join(region_need)
                    row.append(region_need)
                    row.append(need_count)
                    out_csv.writerow(row)
        csv_writer.close()
    csv_reader.close()

def autoFileRun():
    files = ['2017_08_23_stream', '2017_08_24_stream', '2017_08_25_stream', '2017_08_26_stream', '2017_08_27_stream',
             '2017_08_28_stream', '2017_08_29_stream', '2017_08_30_stream', '2017_09_01_stream']
    for file in files:
        find_needsInRegion(file)
# autoFileRun()
find_needsInRegion('2017_08_31_stream')

