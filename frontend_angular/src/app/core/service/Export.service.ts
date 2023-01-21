import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {saveAs} from 'file-saver';
import {Injectable} from '@angular/core';
import {Workbook} from "exceljs/dist/exceljs.min.js";

@Injectable({
    providedIn: 'root'
})
export class ExportService {
    constructor() {
    }

    exportCampagneExcel(compagneData: any[], distinctionsData: any[], boursesData: any[], gestionEquipeData: any[], savoirEtInnavtionsData: any[],
                        eventColloqueData: any[], rencontrePublicData: any[], rencontreMediaData: any[], OutilPedagogiqueData: any[], encadrementDoctorantData: any[],
                        encadrementEtudiantData: any[], encadrementEquipeData: any[], filename: string) {
        //Excel Title, Header, Data
        const title = filename;

        //Create workbook and worksheet
        let workbook = new Workbook();

        let worksheet = workbook.addWorksheet(filename);
        let worksheetDistinctions = workbook.addWorksheet('Distinctions');
        let worksheetBourses = workbook.addWorksheet('Projets et financements');
        let worksheetGestionEquipes = workbook.addWorksheet('Vie Institutionnelle');
        let worksheetSavoirEtInnovation = workbook.addWorksheet('Savoir et innovation');
        let worksheetCultureScientifique = workbook.addWorksheet('Culture Scientifique');
        let worksheetEncadrement = workbook.addWorksheet('Encadrement');


        //Add criteria title 
        let titleRowCR = worksheet.addRow(filename);
        titleRowCR.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheet.addRow([]);
        const headerCr = Object.keys(compagneData[0]);
        let headerRowCr = worksheet.addRow(headerCr);
        // Cell Style : Fill and Border
        headerRowCr.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        compagneData.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });
        for (let i = 1; i <= Object.keys(compagneData[0]).length; i++) {
            worksheet.getColumn(i).width = 36;
        }

        //Add Row and formatting
        worksheet.addRow([]);
        let titleRow = worksheetDistinctions.addRow(['Distinction']);
        titleRow.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};

        let titleRowBourse = worksheetBourses.addRow(['Projets et Financements']);
        titleRowBourse.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};

        let titleRowGestionEquipe = worksheetGestionEquipes.addRow(['Vie Institutionnelle']);
        titleRowGestionEquipe.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};

        let titleRowSavoirEtInnovation = worksheetSavoirEtInnovation.addRow(['Savoir Et Innovation']);
        titleRowSavoirEtInnovation.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};

        let titleRowRencontreGrandJeunePublic = worksheetCultureScientifique.addRow(['Rencontre Grand Jeune Public']);
        titleRowRencontreGrandJeunePublic.font = {
            name: 'Calibri',
            family: 4,
            size: 14,
            underline: 'single',
            bold: true
        };

        let titleRowEncadrementDoctorant = worksheetEncadrement.addRow(['Encadrement Doctorant']);
        titleRowEncadrementDoctorant.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};

        // let subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])

        // worksheet.mergeCells('A1:D2');
        //Blank Row 
        worksheetDistinctions.addRow([]);
        worksheetBourses.addRow([]);
        worksheetGestionEquipes.addRow([]);
        worksheetSavoirEtInnovation.addRow([]);
        worksheetCultureScientifique.addRow([]);
        worksheetEncadrement.addRow([]);
        if (distinctionsData.length > 0) {
            //Add Header Row
            let headerRow = worksheetDistinctions.addRow(Object.keys(distinctionsData[0]));

            // Cell Style : Fill and Border
            headerRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            distinctionsData.forEach(d => {
                let row = worksheetDistinctions.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(distinctionsData[0]).length; i++) {
                worksheetDistinctions.getColumn(i).width = 36;
            }
            worksheetDistinctions.addRow([]);
        }
        if (boursesData.length > 0) {
            //Add Header Row
            let headerBoursesRow = worksheetBourses.addRow(Object.keys(boursesData[0]));

            // Cell Style : Fill and Border
            headerBoursesRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            boursesData.forEach(d => {
                let row = worksheetBourses.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(boursesData[0]).length; i++) {
                worksheetBourses.getColumn(i).width = 36;
            }
            worksheetBourses.addRow([]);
        }
        if (gestionEquipeData.length > 0) {
            //Add Header Row
            let headerGestionEquipesRow = worksheetGestionEquipes.addRow(Object.keys(gestionEquipeData[0]));

            // Cell Style : Fill and Border
            headerGestionEquipesRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            gestionEquipeData.forEach(d => {
                let row = worksheetGestionEquipes.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(gestionEquipeData[0]).length; i++) {
                worksheetGestionEquipes.getColumn(i).width = 36;
            }
            worksheetGestionEquipes.addRow([]);
        }

        if (savoirEtInnavtionsData.length > 0) {
            //Add Header Row
            let headerSavoirEtInnovationRow = worksheetSavoirEtInnovation.addRow(Object.keys(savoirEtInnavtionsData[0]));

            // Cell Style : Fill and Border
            headerSavoirEtInnovationRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            savoirEtInnavtionsData.forEach(d => {
                let row = worksheetSavoirEtInnovation.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(savoirEtInnavtionsData[0]).length; i++) {
                worksheetSavoirEtInnovation.getColumn(i).width = 36;
            }
            worksheetSavoirEtInnovation.addRow([]);
        }
        let titleEventColloque = worksheetSavoirEtInnovation.addRow(['Evenements colloques scientifiques']);
        titleEventColloque.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheetSavoirEtInnovation.addRow([]);
        if (eventColloqueData.length > 0) {
            //Add Header Row
            let headerEventColloqueRow = worksheetSavoirEtInnovation.addRow(Object.keys(eventColloqueData[0]));

            // Cell Style : Fill and Border
            headerEventColloqueRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            eventColloqueData.forEach(d => {
                let row = worksheetSavoirEtInnovation.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(eventColloqueData[0]).length; i++) {
                worksheetSavoirEtInnovation.getColumn(i).width = 36;
            }
            worksheetSavoirEtInnovation.addRow([]);
        }
        if (rencontrePublicData.length > 0) {
            //Add Header Row
            let headerRencontrePublicRow = worksheetCultureScientifique.addRow(Object.keys(rencontrePublicData[0]));
            // Cell Style : Fill and Border
            headerRencontrePublicRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            rencontrePublicData.forEach(d => {
                let row = worksheetCultureScientifique.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(rencontrePublicData[0]).length; i++) {
                worksheetCultureScientifique.getColumn(i).width = 36;
            }
            worksheetCultureScientifique.addRow([]);
        }
        let titleRencontreMedia = worksheetCultureScientifique.addRow(['Rencontre Avec les Medias']);
        titleRencontreMedia.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheetCultureScientifique.addRow([]);
        if (rencontreMediaData.length > 0) {
            //Add Header Row
            let headerRencontreMediaRow = worksheetCultureScientifique.addRow(Object.keys(rencontreMediaData[0]));
            // Cell Style : Fill and Border
            headerRencontreMediaRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            rencontreMediaData.forEach(d => {
                let row = worksheetCultureScientifique.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(rencontreMediaData[0]).length; i++) {
                worksheetCultureScientifique.getColumn(i).width = 36;
            }
            worksheetCultureScientifique.addRow([]);
        }
        let titleOutilPedagogique = worksheetCultureScientifique.addRow(['Outils pédagogiques']);
        titleOutilPedagogique.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheetCultureScientifique.addRow([]);
        if (OutilPedagogiqueData.length > 0) {
            //Add Header Row
            let headerOutilPedagogiqueRow = worksheetCultureScientifique.addRow(Object.keys(OutilPedagogiqueData[0]));
            // Cell Style : Fill and Border
            headerOutilPedagogiqueRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            OutilPedagogiqueData.forEach(d => {
                let row = worksheetCultureScientifique.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(OutilPedagogiqueData[0]).length; i++) {
                worksheetCultureScientifique.getColumn(i).width = 36;
            }
            worksheetCultureScientifique.addRow([]);
        }

        if (encadrementDoctorantData.length > 0) {
            //Add Header Row
            let headerEncadrementDoctorantRow = worksheetEncadrement.addRow(Object.keys(encadrementDoctorantData[0]));
            // Cell Style : Fill and Border
            headerEncadrementDoctorantRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            encadrementDoctorantData.forEach(d => {
                let row = worksheetEncadrement.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(encadrementDoctorantData[0]).length; i++) {
                worksheetEncadrement.getColumn(i).width = 36;
            }
            worksheetEncadrement.addRow([]);
        }
        let titleEncadrementEtudiant = worksheetEncadrement.addRow(['Encadrement Etudiant']);
        titleEncadrementEtudiant.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheetEncadrement.addRow([]);
        if (encadrementEtudiantData.length > 0) {
            //Add Header Row
            let headerEncadrementEtudiantRow = worksheetEncadrement.addRow(Object.keys(encadrementEtudiantData[0]));
            // Cell Style : Fill and Border
            headerEncadrementEtudiantRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            encadrementEtudiantData.forEach(d => {
                let row = worksheetEncadrement.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(encadrementEtudiantData[0]).length; i++) {
                worksheetEncadrement.getColumn(i).width = 36;
            }
            worksheetEncadrement.addRow([]);
        }

        let titleEncadrementEquipe = worksheetEncadrement.addRow(['Encadrement Equipe']);
        titleEncadrementEquipe.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheetEncadrement.addRow([]);
        if (encadrementEquipeData.length > 0) {
            //Add Header Row
            let headerEncadrementEquipeRow = worksheetEncadrement.addRow(Object.keys(encadrementEquipeData[0]));
            // Cell Style : Fill and Border
            headerEncadrementEquipeRow.eachCell((cell, number) => {
                cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
                cell.border = {
                    top: {style: 'thin'},
                    left: {style: 'thin'},
                    bottom: {style: 'thin'},
                    right: {style: 'thin'}
                }
            });
            // worksheet.addRows(data);
            // Add Data and Conditional Formatting
            encadrementEquipeData.forEach(d => {
                let row = worksheetEncadrement.addRow(Object.values(d));
            });
            for (let i = 1; i <= Object.keys(encadrementEquipeData[0]).length; i++) {
                worksheetEncadrement.getColumn(i).width = 36;
            }
            worksheetEncadrement.addRow([]);
        }
        workbook.xlsx.writeBuffer().then((data) => {
            this.saveAsExcelFile(data, filename);
        })
    }


    exportExcel(criteriaData: any[], exportData1: any[], exportData2: any[], exportData3: any[],
                title1: string, title2: string, title3: string, filename: string) {
        //Create workbook and worksheet
        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet(filename);
        //Add criteria  
        let headerCr: string[] = [];
        if (criteriaData.length > 0) {
            let titleRowCR = worksheet.addRow(['Critères']);
            titleRowCR.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
            worksheet.addRow([]);
            headerCr = Object.keys(criteriaData[0]);
        }
        let headerRowCr = worksheet.addRow(headerCr);
        headerRowCr.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        criteriaData.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });

        worksheet.addRow([]);

        //add first export data 
        let header1: string[] = [];
        let titleRow = worksheet.addRow([title1]);
        titleRow.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        //Blank Row 
        worksheet.addRow([]);
        if (exportData1.length > 0) {
            header1 = Object.keys(exportData1[0]);
        }
        let headerRow1 = worksheet.addRow(header1);
        // Cell Style : Fill and Border
        headerRow1.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        exportData1.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });
        for (let i = 1; i <= header1.length; i++) {
            worksheet.getColumn(i).width = 36;
        }

        worksheet.addRow([]);

        //add second export data 
        let header2: string[] = [];
        let titleRow2 = worksheet.addRow([title2]);
        titleRow2.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        //Blank Row 
        worksheet.addRow([]);
        if (exportData2.length > 0) {
            header2 = Object.keys(exportData2[0]);
        }
        let headerRow2 = worksheet.addRow(header2);
        // Cell Style : Fill and Border
        headerRow2.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        exportData2.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });
        for (let i = 1; i <= header2.length; i++) {
            worksheet.getColumn(i).width = 36;
        }

        //add third export data 
        let header3: string[] = [];
        let titleRow3 = worksheet.addRow([title3]);
        titleRow3.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        //Blank Row 
        worksheet.addRow([]);
        if (exportData3.length > 0) {
            header3 = Object.keys(exportData3[0]);
        }
        let headerRow3 = worksheet.addRow(header3);
        // Cell Style : Fill and Border
        headerRow3.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        exportData3.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });
        for (let i = 1; i <= header3.length; i++) {
            worksheet.getColumn(i).width = 36;
        }
        workbook.xlsx.writeBuffer().then((e) => {
            this.saveAsExcelFile(e, filename);
        })
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        import('file-saver').then(FileSaver => {
            const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
            FileSaver.saveAs(data, fileName + '.xlsx');
        });
    }

    exportPdf(criteriaData: any[], exportData1: any[], exportData2: any[], exportData3: any[],
              title1: string, title2: string, title3: string, filename: string): void {
        const doc = new jsPDF();
        if (criteriaData.length > 0) {
            let columnsCriteria: any[] = [];
            Object.keys(criteriaData[0]).forEach(e => {
                let headerObject: any = {};
                headerObject.header = e;
                headerObject.dataKey = e;
                columnsCriteria.push(headerObject);
                autoTable(doc, {
                    columns: columnsCriteria,
                    body: criteriaData,
                    startY: 25,
                    margin: {horizontal: 10},
                    styles: {overflow: "linebreak", fontSize: 4.6},
                    bodyStyles: {valign: "top"},
                    theme: "striped",
                    showHead: "everyPage", didDrawPage: function (data) {
                        // Header
                        doc.setFontSize(8);
                        doc.setTextColor(40);
                        doc.text("Critères :", data.settings.margin.left, 22);
                    }
                });
            });
        }
        if (exportData1.length > 0) {
            let columnsData: any[] = [];
            Object.keys(exportData1[0]).forEach(e => {
                let headerData: any = {};
                headerData.header = e;
                headerData.dataKey = e;
                columnsData.push(headerData);
            });
            autoTable(doc, {
                columns: columnsData,
                body: exportData1,
                startY: 45,
                margin: {horizontal: 10},
                styles: {overflow: "linebreak", fontSize: 4.6},
                bodyStyles: {valign: "top"},
                theme: "striped",
                showHead: "everyPage", didDrawPage: function (data) {
                    // Header
                    doc.setFontSize(8);
                    doc.setTextColor(40);
                    doc.text(title1, data.settings.margin.left, 40);
                }
            });
        }
        let valueY = 45 + 15 * exportData1.length;
        if (exportData2.length > 0) {
            let columnsData: any[] = [];
            Object.keys(exportData2[0]).forEach(e => {
                let headerData: any = {};
                headerData.header = e;
                headerData.dataKey = e;
                columnsData.push(headerData);
            });
            autoTable(doc, {
                columns: columnsData,
                body: exportData2,
                startY: valueY + 5 + 15 * exportData1.length,
                margin: {horizontal: 10},
                styles: {overflow: "linebreak", fontSize: 4.6},
                bodyStyles: {valign: "top"},
                theme: "striped",
                showHead: "everyPage", didDrawPage: function (data) {
                    // Header
                    doc.setFontSize(8);
                    doc.setTextColor(40);
                    doc.text(title2, data.settings.margin.left, valueY + 15 * exportData1.length);
                }
            });
            valueY = valueY + 15 * exportData1.length;
        }
        if (exportData3.length > 0) {
            let columnsData: any[] = [];
            Object.keys(exportData3[0]).forEach(e => {
                let headerData: any = {};
                headerData.header = e;
                headerData.dataKey = e;
                columnsData.push(headerData);
            });
            autoTable(doc, {
                columns: columnsData,
                body: exportData3,
                startY: valueY + 5 + 15 * exportData2.length,
                margin: {horizontal: 10},
                styles: {overflow: "linebreak", fontSize: 4.6},
                bodyStyles: {valign: "top"},
                theme: "striped",
                showHead: "everyPage", didDrawPage: function (data) {
                    // Header
                    doc.setFontSize(8);
                    doc.setTextColor(40);
                    doc.text(title3, data.settings.margin.left, valueY + 15 * exportData2.length);
                }
            });
        }
        doc.save(filename + '.pdf');
    }

    exportCSV(criteriaData: any[], exportData1: any[], exportData2: any[], exportData3: any[], title1: string, title2: string, title3: string) {
        const replacer = (key, value) => value === null ? '' : value;
        let headerCr: string[] = [];
        if (criteriaData.length > 0) {
            headerCr = Object.keys(criteriaData[0]);
        }
        let csvCr = criteriaData.map(row => headerCr.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
        csvCr.unshift(headerCr.join(';'));
        let csvCrArray = csvCr.join('\r\n');

        let header1: string[] = [];
        if (exportData1.length > 0) {
            header1 = Object.keys(exportData1[0]);
            let csv = exportData1.map(row => header1.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
            csv.unshift(header1.join(';'));
            let csvArray = csv.join('\r\n');
            var blob = new Blob([csvCrArray, '\n', '\n', csvArray], {type: 'text/csv'});
            saveAs(blob, title1 + ".csv");
        }

        let header2: string[] = [];
        if (exportData2.length > 0) {
            header2 = Object.keys(exportData2[0]);
            let csv2 = exportData2.map(row => header2.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
            csv2.unshift(header2.join(';'));
            let csvArray2 = csv2.join('\r\n');
            var blob = new Blob([csvCrArray, '\n', '\n', csvArray2], {type: 'text/csv'});
            saveAs(blob, title2 + ".csv");
        }

        let header3: string[] = [];
        if (exportData3.length > 0) {
            header3 = Object.keys(exportData3[0]);
            let csv3 = exportData3.map(row => header3.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
            csv3.unshift(header3.join(';'));
            let csvArray3 = csv3.join('\r\n');
            var blob = new Blob([csvCrArray, '\n', '\n', csvArray3], {type: 'text/csv'});
            saveAs(blob, title3 + ".csv");
        }

    }


    exporterExcel(criteriaData: any[], exportData: any[], filename: string) {
        //Excel Title, Header, Data
        const title = filename;
        const header = Object.keys(exportData[0]);
        const data = exportData;
        //Create workbook and worksheet
        let workbook = new Workbook();

        let worksheet = workbook.addWorksheet('liste des ' + filename);


        //Add criteria title
        let titleRowCR = worksheet.addRow(['Critères']);
        titleRowCR.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};
        worksheet.addRow([]);
        const headerCr = Object.keys(criteriaData[0]);
        let headerRowCr = worksheet.addRow(headerCr);
        // Cell Style : Fill and Border
        headerRowCr.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        criteriaData.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });
        //Add Row and formatting
        worksheet.addRow([]);
        let titleRow = worksheet.addRow([title]);
        titleRow.font = {name: 'Calibri', family: 4, size: 14, underline: 'single', bold: true};

        // let subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])

        // worksheet.mergeCells('A1:D2');
        //Blank Row
        worksheet.addRow([]);
        //Add Header Row
        let headerRow = worksheet.addRow(header);

        // Cell Style : Fill and Border
        headerRow.eachCell((cell, number) => {
            cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: '03FCF4'}}
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}}
        });
        // worksheet.addRows(data);
        // Add Data and Conditional Formatting
        data.forEach(d => {
            let row = worksheet.addRow(Object.values(d));
        });
        for (let i = 1; i <= header.length; i++) {
            worksheet.getColumn(i).width = 36;
        }
        worksheet.addRow([]);
        //Footer Row
        let footerRow = worksheet.addRow(['Description']);
        footerRow.getCell(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {argb: 'FFCCFFE5'}
        };
        //footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
        //Merge Cells
        // worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
        //Generate Excel File with given name
        workbook.xlsx.writeBuffer().then((data) => {
            this.saveAsExcelFile(data, filename);
        })
    }

    exporterPdf(criteriaData: any[], exportData: any[], filename: string): void {
        const doc = new jsPDF();
        let columnsCriteria: any[] = [];
        let columnsData: any[] = [];

        Object.keys(criteriaData[0]).forEach(e => {
            let headerObject: any = {};
            headerObject.header = e;
            headerObject.dataKey = e;
            columnsCriteria.push(headerObject);
        });
        Object.keys(exportData[0]).forEach(e => {
            let headerData: any = {};
            headerData.header = e;
            headerData.dataKey = e;
            columnsData.push(headerData);
        });
        autoTable(doc, {
            columns: columnsCriteria,
            body: criteriaData,
            startY: 25,
            margin: {horizontal: 10},
            styles: {overflow: "linebreak", fontSize: 5},
            bodyStyles: {valign: "top"},
            theme: "striped",
            showHead: "everyPage", didDrawPage: function (data) {
                // Header
                doc.setFontSize(10);
                doc.setTextColor(40);
                doc.text("Critères :", data.settings.margin.left, 22);
            }
        });
        autoTable(doc, {
            columns: columnsData,
            body: exportData,
            startY: 41,
            margin: {horizontal: 10},
            styles: {overflow: "linebreak", fontSize: 5},
            bodyStyles: {valign: "top"},
            theme: "striped",
            showHead: "everyPage", didDrawPage: function (data) {
                // Header
                doc.setFontSize(10);
                doc.setTextColor(40);
                doc.text("Liste des " + filename, data.settings.margin.left, 40);
            }
        });
        doc.save(filename + '.pdf');
    }

    exporterCSV(criteriaData: any[], exportData: any[], filename: string) {
        const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
        const headerCr = Object.keys(criteriaData[0]);
        const header = Object.keys(exportData[0]);

        let csvCr = criteriaData.map(row => headerCr.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
        csvCr.unshift(headerCr.join(';'));
        let csvCrArray = csvCr.join('\r\n');

        let csv = exportData.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
        csv.unshift(header.join(';'));
        let csvArray = csv.join('\r\n');
        var blob = new Blob([csvCrArray, '\n', '\n', csvArray], {type: 'text/csv'})
        saveAs(blob, filename + ".csv");
    }

}
