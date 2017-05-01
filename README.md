## Coming soon 
Old README.md become unactual. New one will be here soon.

## Database

Back up
```bash
pg_dump -U fuchtard -Fc fuchtard > ~/dump_`date +%Y-%m-%d"_"%H_%M_%S`.bak
```

Restore
```bash
pg_restore -U fuchtard -d fuchtard -Fc dump.bak
```