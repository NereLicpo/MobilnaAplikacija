<template>
  <q-page class="q-pa-md">
    <div class="page-header text-center">
      <div class="title">UPSIDE​DOWN</div>
      <div class="subtitle">Uronite u mračni svijet gdje razum dolazi na kušnju.</div>
    </div>
    <q-card flat bordered class="q-pa-md transparent-bg">
      <div class="about-content-container">

        <!-- Synopsis Section -->
        <div class="synopsis-section">
          <div class="text-h6 text-orange">O Igri</div>
          <p class="synopsis-text">
            Igrač preuzima kontrolu nad Krunom, u likom zarobljenim u raspadnutom svijetu punom strašnih nakaza.<br>
            Glavni cilj igre je preživjeti, pronaći hranu i vodu, ali i očuvati zdrav razum dok se suočava s vlastitim unutarnjim demonima i užasima vanjskog svijeta.
          </p>
        </div>

        <!-- Updated Table Section -->
        <div class="custom-table-container">
          <q-table
            flat
            bordered
            class="about-table q-mt-md"
            :rows="tableData"
            :columns="columns"
            row-key="id"
            :dense="true"
            :rows-per-page-options="[5, 10, 15]"
            :pagination="pagination"
          />
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Dynamic table data
      tableData: [
        { col1: 'POV', col2: '[Third-person]' },
        { col1: 'Multiplayer', col2: '[No]' },
        { col1: 'Spooky', col2: '[Yes]' },
        { col1: 'Production Quality', col2: '[Indie]' },
      ],
      columns: [
        { name: 'col1', align: 'left', label: 'Attribute', field: 'col1' },
        { name: 'col2', align: 'left', label: 'Details', field: 'col2' }
      ],
      pagination: {
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 4,
      }
    };
  }
};
</script>

<style scoped>
/* Page Header */
.page-header {
  margin-bottom: 20px;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  color: #ff6600;  /* Changed to a warmer color for better contrast */
  text-transform: uppercase;
}
.subtitle {
  font-size: 1.2rem;
  color: #fff;
  margin-top: 10px;
}

/* Semi-transparent background for the main container */
.transparent-bg {
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);
  padding: 20px;
}

/* Synopsis Section */
.synopsis-section {
  margin-top: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.9);
  border-left: 4px solid #ff6600;  /* Adjusted color for emphasis */
  border-radius: 8px;
  color: #fff;
}
.synopsis-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 10px;
}

/* Table Styling */
.custom-table-container {
  margin-top: 20px;
  padding: 15px;
  background: rgba(20, 20, 20, 0.85);
  border-radius: 10px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.6);
}

.about-table {
  width: 100%;
  color: #fff;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 8px;
  text-align: left;
}

.about-table th {
  font-weight: bold;
  color: #ff6600;  /* Consistent color with title and borders */
}

.about-table td {
  padding: 10px;
  border-bottom: 1px solid #444;
}

.about-table tr:hover {
  background: rgba(50, 50, 50, 0.6);
}

.about-table .q-table__bottom {
  background: rgba(0, 0, 0, 0.85);
  border-top: 1px solid #ff6600;
}
</style>
