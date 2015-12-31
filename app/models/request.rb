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
      :from => "ecsuaitplocker@gmail.com",
      :subject => "Computer Request",
      :to => "keroberts17@gmail.com",
      :cc => "aitp@my.easternct.edu",
      :cc => "citursa@easternct.edu",
    }
  end	
end
