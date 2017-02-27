class Api::MembershipsController < ApplicationController
  def index
  end

  def create
    @membership = Membership.new(membership_params)
    @group = @membership.group
    if @membership.save
      render 'api/groups/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(
      user_id: params[:user_id],
      group_id: params[:group_id]
    )

    @group = @membership.group

    if @membership.destroy
      render 'api/groups/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def membership_params
    params.require(:membership).permit(:user_id, :group_id)
  end
end
