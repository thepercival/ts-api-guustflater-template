# ts-api-guustflater-template
Template which includes api-basic-structure with github functionality

# Steps for duplication
1. ga naar git en maak repository aan
2. a. Create classic branch-protectionrule for main. Only enable "require a pr before merging"
2. b. Onder settings->Actions geef GITHUB_TOKEN schrijfrechten
3. git clone https://github.com/thepercival/ts-planningxyz-api.git
4. git clone https://github.com/thepercival/ts-api-guustflater-template.git
5. maak branch aan in code (gebruik feat(x): y of fix(x): y voor releases ). 
6. copy de gehele bestandsstructuur en do een search-replace "guustflater" eigen naam "planningxyz"
7. loop de volgende bestanden na:
    * package.json    
    * definitions/guustflater-openapi.yaml
    * src/index.ts
    * src/index.test.ts
8. npm install
9. "npm run openapi" => generate types from ./definitions/guustflater-openapi.yaml to types/guustflater-openapi.d.ts
10. npm run build
11. npm run watch
12. npm run test
13. npm run watch && kijk of de api werkt
14. maak PR en kijk of je een release hebt in github actions