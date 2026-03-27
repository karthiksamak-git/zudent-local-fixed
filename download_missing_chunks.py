import os
import urllib.request
import time

css_chunks = {
  0: "31d6cfe0", 1: "31d6cfe0", 2: "31d6cfe0", 3: "31d6cfe0", 4: "31d6cfe0", 5: "31d6cfe0", 6: "31d6cfe0", 7: "31d6cfe0", 8: "31d6cfe0", 9: "31d6cfe0", 10: "31d6cfe0", 11: "31d6cfe0", 12: "31d6cfe0", 13: "31d6cfe0", 14: "31d6cfe0", 15: "31d6cfe0", 16: "31d6cfe0", 17: "31d6cfe0", 21: "31d6cfe0", 22: "31d6cfe0", 23: "31d6cfe0", 24: "31d6cfe0", 25: "31d6cfe0", 26: "31d6cfe0", 27: "31d6cfe0", 28: "31d6cfe0", 29: "31d6cfe0", 30: "31d6cfe0", 31: "31d6cfe0", 32: "31d6cfe0", 33: "31d6cfe0", 34: "e7f6af42", 35: "31d6cfe0", 36: "31d6cfe0", 37: "31d6cfe0", 38: "31d6cfe0", 39: "31d6cfe0", 40: "31d6cfe0", 41: "31d6cfe0", 42: "31d6cfe0", 43: "31d6cfe0", 44: "31d6cfe0", 45: "31d6cfe0", 46: "31d6cfe0", 47: "31d6cfe0", 48: "31d6cfe0", 49: "31d6cfe0", 50: "31d6cfe0", 51: "31d6cfe0", 52: "31d6cfe0", 53: "31d6cfe0", 54: "31d6cfe0", 55: "31d6cfe0", 56: "31d6cfe0", 57: "31d6cfe0", 58: "31d6cfe0", 59: "31d6cfe0", 60: "31d6cfe0", 61: "31d6cfe0", 62: "31d6cfe0", 63: "31d6cfe0", 64: "31d6cfe0", 65: "31d6cfe0", 66: "31d6cfe0", 67: "31d6cfe0", 68: "31d6cfe0", 69: "31d6cfe0", 70: "31d6cfe0", 71: "31d6cfe0", 72: "31d6cfe0", 73: "31d6cfe0", 74: "31d6cfe0", 75: "31d6cfe0", 76: "31d6cfe0", 77: "31d6cfe0", 78: "31d6cfe0", 79: "31d6cfe0", 80: "31d6cfe0", 81: "31d6cfe0", 82: "31d6cfe0", 83: "31d6cfe0", 84: "31d6cfe0", 85: "31d6cfe0", 86: "31d6cfe0", 87: "31d6cfe0"
}

js_chunks = {
  0: "a852496f", 1: "2d8938c7", 2: "df20def0", 3: "75c8d53e", 4: "cefa73ec", 5: "216c370f", 6: "34a93060", 7: "ca391709", 8: "e27cadd1", 9: "5ecb2fe3", 10: "58fe346b", 11: "491b1bd9", 12: "c61f82dd", 13: "ad905e39", 14: "4c2c0fdb", 15: "eab40a48", 16: "551c41cf", 17: "ea9fe409", 21: "1b48e3c8", 22: "c1949155", 23: "64f387b5", 24: "f74053ab", 25: "9fdd1fb1", 26: "7df6e23d", 27: "ced56ba3", 28: "d87d39f3", 29: "1a752e84", 30: "dd3327f1", 31: "80b8b7b9", 32: "842fe285", 33: "0bb3f6bc", 34: "4b8edea4", 35: "19f916a4", 36: "c9a65268", 37: "ad8a8645", 38: "0c871fd2", 39: "341df50f", 40: "407f65b8", 41: "ec52a839", 42: "9724ac47", 43: "b302739e", 44: "3618e4ad", 45: "dedf9787", 46: "23eddf55", 47: "8378383b", 48: "aba09ab7", 49: "1af8c50f", 50: "e997c6db", 51: "fc222a1a", 52: "57ac69cb", 53: "d793bf90", 54: "fd85ed26", 55: "ca79b7c4", 56: "d71d9817", 57: "738425da", 58: "84e79483", 59: "4f447682", 60: "5a60c988", 61: "9f7fa0a7", 62: "142dd97a", 63: "1d1a51d4", 64: "c90db198", 65: "1786b56c", 66: "85d252af", 67: "48c4e313", 68: "a06b6384", 69: "e0f17915", 70: "adb337f0", 71: "db9fd105", 72: "550ce765", 73: "f83ba61c", 74: "d44366ba", 75: "bf36899a", 76: "b236eac5", 77: "722ec0af", 78: "e4ae2a77", 79: "bf755088", 80: "4ace5b16", 81: "6ecac706", 82: "7f37500a", 83: "bdbab56e", 84: "eef761cd", 85: "405a960b", 86: "5676c9a4", 87: "6460391b"
}

base_url = "https://zudent.rovelabs.com"
cwd = os.getcwd()

def make_dirs(path):
    if not os.path.exists(path):
        os.makedirs(path)

make_dirs(os.path.join(cwd, "static", "css"))
make_dirs(os.path.join(cwd, "static", "js"))

for chunk_id, hash_val in css_chunks.items():
    filename = f"{chunk_id}.{hash_val}.chunk.css"
    filepath = os.path.join(cwd, "static", "css", filename)
    if not os.path.exists(filepath):
        url = f"{base_url}/static/css/{filename}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                with open(filepath, 'wb') as f:
                    f.write(response.read())
            print(f"Downloaded {filename}")
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
        time.sleep(0.1)

for chunk_id, hash_val in js_chunks.items():
    filename = f"{chunk_id}.{hash_val}.chunk.js"
    filepath = os.path.join(cwd, "static", "js", filename)
    if not os.path.exists(filepath):
        url = f"{base_url}/static/js/{filename}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                with open(filepath, 'wb') as f:
                    f.write(response.read())
            print(f"Downloaded {filename}")
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
        time.sleep(0.1)

print("Finished downloading chunks")
