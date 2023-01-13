# # Collesctions

# arr = ['assdf', 3, 4, 12, 'asdf', 'b', true]

# puts arr.size
# puts arr.length

# arr.delete(1)
# arr.delete_at(2)

# # print arr

# y = arr.delete_at(4)

# # print y

# batting_averages = [0.300, 0, 18, 0.2020, 0.250]
# batting_averages.delete_if { |average| average < 0.24 }
# print batting_averages

# teams = %w[astros yankees ranges]

# teams.push('marlins')
# teams.push('red sox', 'blue jays')
# puts '/n'
# print teams

# puts '/n'
# print teams.join(',')

# Все три записи равносильны
# positions = { first_name: 'Chris Carter', second_name: 'Uriy Dergachev' }
positions = { 'first_name' => 'Chris Carter', 'second_name' => 'Uriy Dergachev' }
# positions = {:first_name => "Chris Carter", :second_name => 'Uriy Dergachev'}

# почему не пенчатает ?
print positions[:first_name]

people = { jordan: 43, uriy: 28, alice: 13, kristine: 30 }
people.delete(:jordan)

# print people

# iterate over hash
people.each_key do |key|
  puts key
end

people.each_value do |value|
  puts value
end
