<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="relative md:ml-64 bg-blueGray-100">
      <navbar-component></navbar-component>
      <!-- Header -->
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div>

          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <div class="flex flex-wrap">
          <line-chart-component></line-chart-component>
          <bar-chart-component></bar-chart-component>

          <line-chart-predicted-component></line-chart-predicted-component>
          <bar-chart-predicted-component></bar-chart-predicted-component>
        </div>
        <div class="flex flex-wrap mt-4">
          
          

        </div>
        <footer class="block py-4">
          <About />


          <div class="container mx-auto px-4">
            <hr class="mb-4 border-b-1 border-blueGray-200" />
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-4/12 px-4">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Data & Revisions by: Robert Trigo<br>
                  Template by: 
                  <a
                    href="https://www.creative-tim.com"
                    class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                  >
                    Creative Tim
                  </a>
                  Copyright © {{date}}
                </div>
              </div>
              <div class="w-full md:w-8/12 px-4">
                <ul class="flex flex-wrap list-none md:justify-end  justify-center">
                  <li>
                    <a
                      href="https://www.creative-tim.com"
                      class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.creative-tim.com"
                      class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                      class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
import LineChartComponent from "../components/LineChart.vue";
import LineChartPredictedComponent from "../components/LineChartPredicted.vue";
import BarChartComponent from "../components/BarChart.vue";
import BarChartPredictedComponent from "../components/BarChartPredicted.vue";
import About from "../components/About.vue";

export default {
  name: "dashboard-page",
  components: {
    NavbarComponent,
    SidebarComponent,
    LineChartComponent,
    LineChartPredictedComponent,
    BarChartComponent,
    BarChartPredictedComponent,
    About
  },
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
};
</script>
