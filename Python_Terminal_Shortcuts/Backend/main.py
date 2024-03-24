# shortcuts for making react folders and directories all in one go. 

# either keyboard shortcuts or a file on desktop that will automatically 
    # open and create a folder is selected directory 

# TODO: 
#   - find python library for this 
#   - code it

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/create_project', methods=['POST'])
def create_project():
    data = request.json  # Get JSON data from the request
    project_name = data.get('project_name')
    project_type = data.get('project_type')

    # Perform actions with the project name and project type
    # For example, create a new project with the specified name and type

    response_message = f"Project '{project_name}' of type '{project_type}' created successfully"
    return jsonify({"message": response_message})

if __name__ == '__main__':
    app.run(debug=True)
