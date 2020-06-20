@echo off

RD /Q /S C:\Users\timos\Documents\Websites\tccomponents\src\components

Xcopy /E /I C:\Users\timos\Documents\Websites\Portfolio\src\components\tc C:\Users\timos\Documents\Websites\tccomponents\src\components

DEL /F C:\Users\timos\Documents\Websites\tccomponents\src\components\index.ts