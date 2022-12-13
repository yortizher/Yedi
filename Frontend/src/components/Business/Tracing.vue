<template>
     <div class="row">
                <div class="row title mt-3 text-center">
                    <h3>Historial de seguimiento</h3>
                </div>
                <div class="col m-3">
                    <!-- tabla-->
                    <div class="row" id="tabla">
                        <div class="container pe-4 ps-4">
                            <div class="table-responsive">
                                <table class="table table-bordered border-dark border-5 ">
                                    <thead class="table-header">
                                        <tr class="text-center">
                                            <th class="col-3">Imagen</th>
                                            <th class="col-3">Nombre</th>
                                            <th class="col-3">Estado</th>
                                            <th class="col-3">Opción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- <tr class="body" v-for="item in  dataVentasLocal" :key="item.name">
                                            <td v-text="item.id"></td>
                                            <td >{{item.amount}}-{{item.product.product_name}}</td>
                                            <td >$ {{thousandSeparator(item.total)}}</td>
                                        </tr> -->
                                    </tbody>
                                    

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>