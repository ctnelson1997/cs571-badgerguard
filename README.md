```
docker build . -t ctnelson1997/cs571-badgerguard
docker push ctnelson1997/cs571-badgerguard
```

```
docker pull ctnelson1997/cs571-badgerguard
docker run -dit --restart=always --name cs571_badgerguard -p 31667:80 ctnelson1997/cs571-badgerguard
```
