# création app 
npx create-next-app@latest 

# instal prisma ORM
npm install prisma --save-dev

## il faut parameter le sql Provider qui va être le type SGBD, notre de type  base de données
npx prisma init --datasource-provider sqlite

## Des fois ça ne fonctionne pas , il demande de désactiver la vérification ssl , non recommandé car ça diminiue la sécurité, dans la console : 

export NODE_TLS_REJECT_UNAUTHORIZED='0'

# pour gerer le Design on installe le daisy UI : 
npm install -D daisyui@latest