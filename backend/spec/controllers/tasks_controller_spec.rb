require 'rails_helper'
require 'json'

RSpec.describe TaskController, type: :controller do

  it 'should return an empty list of todo lists given an user id ' do
    empty_list = []

    allow(TodoList).to receive(:where).and_return(empty_list)

    get :todolist_given_user_id, { :id => 2 }

    expect(response.status).to be 200

    parsed_body = JSON.parse response.body
    expect(parsed_body.length).to eql 0
  end

end
