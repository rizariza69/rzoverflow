<template>
    <div>
        <footer>
            <div class="container-fluid bg-primary py-3 ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row py-0">
                                <div class="col-sm-1 hidden-md-down">
                                    <a class="bg-circle bg-info" href="#">
                                        <i class="fa fa-2x fa-fw fa-address-card" aria-hidden="true "></i>
                                    </a>
                                </div>
                                <div class="col-sm-11 text-white">
                                    <div>
                                        <h4> </h4>
                                        <p>
                                            <span class="header-font">R</span>Z
                                            <span class="header-font"> - </span>Corps.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="d-inline-block">
                                <div class="bg-circle-outline d-inline-block" style="background-color:#3b5998">
                                    <a href="https://www.facebook.com/">
                                        <i class="fa fa-2x fa-fw fa-facebook text-white"></i>
                                    </a>
                                </div>
                                <div class="bg-circle-outline d-inline-block" style="background-color:#4099FF">
                                    <a href="https://twitter.com/">
                                        <i class="fa fa-2x fa-fw fa-twitter text-white"></i>
                                    </a>
                                </div>

                                <div class="bg-circle-outline d-inline-block" style="background-color:#0077B5">
                                    <a href="https://www.linkedin.com/company/">
                                        <i class="fa fa-2x fa-fw fa-linkedin text-white"></i>
                                    </a>
                                </div>
                                <div class="bg-circle-outline d-inline-block" style="background-color:#d34836">
                                    <a href="https://www.google.com/">
                                        <i class="fa fa-2x fa-fw fa-google text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <p class="text-center"> Copyright ©  2018. All right reserved. </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.header-font {
  font-family: "Josefin Slab","Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #fd1506;
}
.fa-facebook{
    color:#3b5998;
}
.fa-linkedin{
    color:#0077B5;
}
.fa-twitter{
    color:#4099FF;
}
.fa-google{
    color:#d34836;
}
.bg-primary {
 background-color: #000 !important;
}

.bg-circle
{
  display: inline-block;
  width: 60px;
  height: 60px;
  padding: 14px 4px;
  color: #ececec;
  text-align: center;
  border-radius: 50%;
}

.bg-circle-outline
{
  width: 50px;
  height: 50px;
  color:smoke;
  padding: 8px 2px;
  border: 2px solid;
  border-color: smoke;
  border-radius: 50%;
}


.bg-circle a, a:hover, .media a:focus
{
  text-decoration: none !important;
  outline: none;
  color: #ececec;
}
.bg-circle-outline a, a:hover, .media a:focus
{
  text-decoration: none !important;
  outline: none;
  color: #ececec;
}
.footer {
	background: #EDEFF1;
	height: auto;
	padding-bottom: 30px;
	position: relative;
	width: 100%;
	border-bottom: 1px solid #CCCCCC;
	border-top: 1px solid #DDDDDD;
}
.footer p {
	margin: 0;
}
.footer img {
	max-width: 100%;
}
.footer h3 {
	border-bottom: 1px solid #BAC1C8;
	color: #54697E;
	font-size: 18px;
	font-weight: 600;
	line-height: 27px;
	padding: 40px 0 10px;
	text-transform: uppercase;
}
.footer ul {
	font-size: 13px;
	list-style-type: none;
	margin-left: 0;
	padding-left: 0;
	margin-top: 15px;
	color: #7F8C8D;
}
.footer ul li a {
	padding: 0 0 5px 0;
	display: block;
}
.footer a {
	color: #78828D
}

.footer{
    position:fixed
}
</style>