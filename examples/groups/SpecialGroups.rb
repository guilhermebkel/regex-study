text = 'supermercado superação hiperMERCADO'

puts text.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive Lookbehind: Matches characters behind of expected match.
puts text.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative Lookbehind: Matches characters not behind of expected match.
puts text.scan(/(?<!super)mercado/i).join(' ')
