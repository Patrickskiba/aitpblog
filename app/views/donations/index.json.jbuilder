json.array!(@donations) do |donation|
  json.extract! donation, :id, :company, :reason, :currentTech, :pointOfContact
  json.url donation_url(donation, format: :json)
end
