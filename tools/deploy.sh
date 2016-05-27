#!/bin/bash

APPNAME="fuchtard"
STOP_AND_START=true
DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)


echo "Deploying $APPNAME"

# Stop application if requested
if [ "$STOP_AND_START" == true ]; then
    echo " - Stopping application..."
    supervisorctl stop $APPNAME >/dev/null
fi

# Log in as application user to run scripts
cd "$DIR/.."
. ../../../.venvs/$APPNAME/bin/activate
# Update repository
echo " - Getting latest version..."
git clean -d -fx ""
git pull -q >/dev/null
# Run django scripts
echo " - Running scripts..."
echo "   - Migrating database..."
python $APPNAME/manage.py migrate --noinput >/dev/null
echo "   - Collecting static files..."
python $APPNAME/manage.py collectstatic --noinput >/dev/null

pip3 install -r requirements.txt

npm install
./node_modules/.bin/webpack --config webpack.config.js


echo " - Restarting application..."
if [ "$STOP_AND_START" == true ]; then
    supervisorctl start $APPNAME >/dev/null
else
    supervisorctl restart $APPNAME >/dev/null
fi
echo "Done deploying $APPNAME."