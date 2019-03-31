needs = ['water', 'help', 'need', 'people', 'store', 'safe', 'home', 'flood', 'family', 'school', 'nurse', 'support', 'donate', 'food', 'service', 'call', 'rescue', 'donation', 'relief', 'shelter', 'volunteer', 'community', 'boat', 'money', 'victim', 'supply', 'car', 'power', 'restaurant', 'emergency', 'truck', 'dog', 'gas', 'damage', 'contact', 'wine', 'text', 'beer', 'grocery', 'tank', 'clothes', 'trail', 'fund', 'bottle', 'assistance', 'oil', 'advisory', 'cable']
colors = ['#F08080', '#BC8F8F', '#CD5C5C', '#FF0000', '#A52A2A', '#B22222', '#8B0000', '#800000', '#FFA07A', '#FF7F50', '#FF4500', '#E9967A', '#FF6347', '#0000FF', '#0000CD', '#191970', '#00008B', '#000080', '#4169E1', '#6495ED', '#00FFFF', '#00FFFF', '#00CED1', '#2F4F4F', '#008B8B', '#008080', '#48D1CC', '#20B2AA', '#40E0D0', '#7FFFAA', '#00FA9A', '#00FF7F', '#DB7093', '#FF69B4', '#FF1493', '#C71585', '#DA70D6', '#D8BFD8', '#DDA0DD', '#EE82EE', '#FF00FF', '#FF00FF', '#8B008B', '#800080', '#BA55D3', '#9400D3', '#9932CC', '#4B0082']

def needsJs():
    i = 1
    j = 1
    num = 0
    for need in needs:
        if i > 24:
            html1 = '<g transform = "translate(120,' + str(j*25) + ')" id = "' + str(need) +'">'
            j += 1
        else:
            html1 = '<g transform = "translate(0,' + str(i*25) + ')" id = "' + str(need) + '">'
        html2 = '   <circle x = "1066" y = "61" cx = "12" cy = "9" r = "10" stroke-width = "3" fill = "' + colors[num] + '"/>'
        html3 = '   <text x = "24" y = "9" dy = ".35em" fill = "black">' + str(need).capitalize() +'</text>'
        html4 = '</g>'
        print(html1)
        print(html2)
        print(html3)
        print(html4)
        i += 1
        num += 1
# needsJs()

# choose color
# data = pd.read_csv(r'C:\Users\TIM58\Downloads\hurricane-need-vis-master_final\\color.txt', header=None)
# for index, row in data.iterrows():
#     # for col_name in data.columns:
#     print(row[0])
#     colors.append(row[0])
# print(colors)

all_output_csv_path = 'C:/Users/TIM58/Downloads/hurricane-need-vis-master_final/hurricane-need-vis-master/data/raw_data/all_output.csv'

# def needsByFreq():
#     with open(all_output_csv_path, 'r', encoding='utf-8_sig') as csv_reader:
#         rows = csv.reader(csv_reader)
#         for row in rows:
#             hour = row[5]
#             dist_num = row[6]
#             needs = row[11]




