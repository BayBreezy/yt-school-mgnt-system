// load buttons for datatables
import "datatables.net-buttons/js/dataTables.buttons";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-buttons/js/buttons.colVis";

import * as jsZip from "jszip";
import * as pdfmake from "pdfmake/build/pdfmake";
import * as vfs_fonts from "pdfmake/build/vfs_fonts";
// @ts-ignore
// This gets the pdf button to work
pdfmake.vfs = vfs_fonts.pdfMake.vfs;
// This gets the excel download button to work
// @ts-ignore
window.JSZip = jsZip;

// from the docs
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";

DataTable.use(DataTablesLib);

export default defineNuxtPlugin((app) => {
	app.vueApp.component("DataTable", DataTable);
});
