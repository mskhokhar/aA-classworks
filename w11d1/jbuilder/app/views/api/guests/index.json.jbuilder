# json.guests do
    # @guests.each.with_index do |guest, idx|
    #     json.set! idx do
    #         json.partial! 'guest', guest: guest
    #     end 
    # end
# end
# json.partial! 'guest', guest: @guests.first

json.array! @guests, :name, :age, :favorite_color


