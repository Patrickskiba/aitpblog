class Request < MailForm::Base
	attribute :name, :validate => true
	attribute :organization, :validate => true
	attribute :email, :validate => true
	attribute :phone, :validate => true
	attribute :address, :validate => true
	attribute :message, :validate => true
	attribute :comp, :validate => true
  def headers
    {
      :from => "aitp@my.easternct.edu",
      :subject => "Computer Request",
      :to => "superninja234@gmail.com",
      :cc => "skibap@my.easternct.edu",
    }
  end	
end
