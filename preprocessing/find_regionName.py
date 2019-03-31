import json
import csv
import pandas as pd
pd.set_option('display.max_rows', 1000)
pd.set_option('display.max_columns', 1000)

regionName = ['Fourth Ward', 'Greater Uptown', 'Greater Inwood', 'Greater Hobby Area', 'Eldridge / West Oaks',
         'Washington Avenue Coalition / Memorial Park', 'Pleasantville Area', 'Northshore', 'Minnetex',
         'Spring Branch East', 'Spring Branch North', 'Langwood', 'Greater Greenspoint', 'Iah / Airport Area',
         'Kingwood Area', 'Lake Houston', 'South Belt / Ellington', 'Ost / South Union', 'Meadowbrook / Allendale',
         'Museum Park', 'Greenway / Upper Kirby Area', 'Mid West', 'Midtown', 'Edgebrook Area', 'Memorial', 'Settegast',
         'Addicks Park Ten', 'Second Ward', 'Independence Heights', 'Downtown', 'Westbranch', 'Clinton Park Tri-Community',
         'Golfcrest / Bellfort / Reveille', 'Greater Fifth Ward', 'Denver Harbor / Port Houston',
         'Lazy Brook / Timbergrove', 'Greater Heights', 'Kashmere Gardens', 'Northside Village', 'Sharpstown',
         'El Dorado / Oates Prairie', 'Westbury', 'Spring Branch Central', 'Hunterwood', 'Willow Meadows / Willowbend Area',
         'Central Northwest', 'Trinity / Houston Gardens', 'Braeburn', 'Carverdale', 'South Main', 'Eastex - Jensen Area',
         'Medical Center Area', 'East Houston', 'Acres Home', 'Northside/Northline', 'Hidden Valley',
         'East Little York / Homestead', 'Willowbrook', 'Fairbanks / Northwest Crossing', 'Gulfton', 'Westwood',
         'Macgregor', 'Fort Bend / Houston', 'Fondren Gardens', 'South Acres / Crestmont Park', 'Brays Oaks',
         'Central Southwest', 'Gulfgate Riverview / Pine Valley', 'Sunnyside', 'Westchase', 'Alief', 'Pecan Park',
         'Clear Lake', 'South Park', 'Astrodome Area', 'Park Place', 'Harrisburg / Manchester', 'University Place',
         'Lawndale / Wayside', 'Greater Third Ward', 'Greater Eastwood', 'Spring Branch West', 'Braeswood Place',
         'Meyerland Area', 'Magnolia Park', 'Afton Oaks / River Oaks Area', 'Briarforest Area', 'Neartown - Montrose']

#To create region file contain region name and dist_num from original csv file
def preprocessing(filename):
    # filename = '2017_08_25_stream'
    csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '.csv'
    new_clean_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_cleaning.csv'
    need_by_region_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/' + filename + '_region.csv'
    json_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/test_map.json'

    multipolygon = []

    #read map.json to get coordinates
    def read_Json():
        with open(json_path, encoding='utf-8') as f:
            json_data = f.read()
            d = json.loads(json_data)
            length = len(d["features"])
            for i in range(length):
                coordinates = d["features"][i]["geometry"]['coordinates']
                multipolygon.append(coordinates)
        f.close()
    read_Json()

    #isPointInPath: check ont point in one ploygon
    def isPointInPath(x, y, poly):
        '''
        x, y -- x and y coordinates of point
        x: Longitude
        y: Latitude
        poly -- a list of tuples [(x, y), (x, y), ...]
        '''
        num = len(poly)
        i = 0
        j = num - 1
        c = False
        for i in range(num):
            if ((poly[i][1] > y) != (poly[j][1] > y)) and \
                    (x < poly[i][0] + (poly[j][0] - poly[i][0]) * (y - poly[i][1]) /
                                      (poly[j][1] - poly[i][1])):
                c = not c
            j = i
        return c
    # isPointInPath(-95.385393, 29.761557, poly)

    dist_num = [] # identify the region by dist_num

    # check one point in Multipolygon
    def isPointInMultipoly(x, y):
        # count = 0
        # isPoint = 0
        for i in range(len(multipolygon)):
            c = isPointInPath(float(x), float(y), multipolygon[i][0][0])
            if c == True:
                dist_num.append(i+1) #multipolygon start from 0, but dist_num start from 1
                # print(i)
                # return i+1
            else:
                continue
        dist_num.append(-1)

        # if isPoint == 0:
        #     count += 1
        # return count
    # isPointInMultipoly(29.9689, -95.6969)

    def main():
        df_csv = pd.read_csv(csv_path, header=None)
        for index, row in df_csv.iterrows():
            x = row[3].split(',')[1]
            y = row[3].split(',')[0]
            isPointInMultipoly(x, y)
        with open(csv_path, 'r', encoding="utf-8_sig") as csvFile:
            rows = csv.reader(csvFile)
            with open(need_by_region_path, 'w', newline='', encoding="utf-8_sig") as csv_writer:
                out_csv = csv.writer(csv_writer)
                i = 0
                row = []
                for row in rows:
                    row.append(dist_num[i]) #add dist_num
                    if dist_num[i] == -1: #add region_name
                        row.append('null') #if dist_num == -1, regionName == null
                    else:
                        row.append(regionName[int(dist_num[i])-1]) #The dist_num start from 1, but the regionName List start from 0
                        # print(regionName)
                    out_csv.writerow(row)
                    i += 1
            csv_writer.close()
        csvFile.close()

    main()


def autoFileRun():
    files = ['2017_08_23_stream', '2017_08_24_stream', '2017_08_25_stream', '2017_08_26_stream', '2017_08_27_stream',
             '2017_08_28_stream', '2017_08_29_stream', '2017_08_30_stream', '2017_09_01_stream']
    for file in files:
        preprocessing(file)

# autoFileRun()

preprocessing('2017_08_31_stream')
