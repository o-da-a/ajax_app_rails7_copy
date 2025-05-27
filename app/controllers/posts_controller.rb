class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post } 
     #renderはコントローラないでビューを表示（html返す、URL変わらない）
    #redirect_toは別のアクションやURLに移動させる、新しいHTTPリクエストの発生
  end
end
