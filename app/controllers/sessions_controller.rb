class SessionsController < ApplicationController
    def index
        cookies[:name] ||= "Frae"
        session[:name] ||= "John"

        render json: { session: session, cookies: cookies.to_hash}
    end

    def create
        user = User.find_by(username: params[:username])

        if user
            session[:user_id] = user.id
            
            render json: user, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def views
        session[:views] ||= 4
        
        session[:views] = session[:views] - 1
        render json: {views: session[:views]}, status: :ok
       
    end

    def destroy
        session.delete :user_id

        head :no_content
    end
end
