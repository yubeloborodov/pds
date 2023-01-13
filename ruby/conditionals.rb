x = 10
y = 5

if x == y
  puts 'x is the same as y'
else
  puts 'x and y are not the same'
end

players = %w[Correa carter altuve]

unless players.empty ?
  players.each { |player| puts player }
end

