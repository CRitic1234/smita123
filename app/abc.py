import os
import zipfile

def zip_current_folder():
    # Get the current working directory
    current_folder = os.getcwd()
    
    # Name the zip file after the current folder
    folder_name = os.path.basename(current_folder)
    zip_filename = f"{folder_name}.zip"
    
    print(f"Zipping contents of: {current_folder}")
    print(f"Saving as: {zip_filename} ...")

    # Create the zip file
    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Walk through the directory
        for root, dirs, files in os.walk(current_folder):
            for file in files:
                # Ignore the zip file currently being created
                if file == zip_filename:
                    continue
                
                # Get the full path of the file
                file_path = os.path.join(root, file)
                
                # Get the relative path (to preserve folder structure inside zip)
                relative_path = os.path.relpath(file_path, current_folder)
                
                # Write to zip
                zipf.write(file_path, relative_path)
    
    print("Done! Zip created successfully.")

if __name__ == "__main__":
    zip_current_folder()