fundapps.github.io
==================

The documentation at docs.fundapps.co is generated by:

1. Pull latest version of master from fundapps.github.io  (Note: ensure the repository is checked out into a folder called fundapps.github.io)
1. Pull latest version of master from Rules (to ensure you are up-to-date)
1. Running (from the repository: RapptrDemo), Disclosure_1MakeDB.cmd (this ensures all rules are approved and that portfolios have rules assigned)  
1. If running PosLimits In the tenants.json file, set the AuthChallengers for positionlimits tenant to "fundapps-optional-sso"
1. Running: Rules\tools\scripts\Docs_Disclosure.bat (or UCITS / AIFMD / PosLimt)  
1. Committing changes in this repository to gitHub
