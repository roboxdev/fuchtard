#!/bin/bash

APPNAME="fuchtard"
STOP_AND_START=true
DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)


echo "Deploying $APPNAME"

# Stop application if requested
if [ "$STOP_AND_START" == true ]; then
    echo " - Stopping application..."
    sudo supervisorctl stop $APPNAME
fi

# Log in as application user to run scripts
cd "$DIR/.."
. ../../../.venvs/$APPNAME/bin/activate
# Update repository
echo " - Getting latest version..."
#git reset --hard
#git pull -q >/dev/null
# Run django scripts
pip3 install -r requirements.txt
echo " - Running scripts..."
echo "   - Migrating database..."
python $APPNAME/manage.py migrate --noinput >/dev/null

npm install
./node_modules/.bin/webpack --config webpack.config.js
echo "   - Collecting static files..."
python $APPNAME/manage.py collectstatic --noinput >/dev/null


echo " - Restarting application..."
if [ "$STOP_AND_START" == true ]; then
    sudo supervisorctl start $APPNAME
else
    sudo supervisorctl restart $APPNAME
fi
echo "Done deploying $APPNAME."