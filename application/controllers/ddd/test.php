<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test extends CI_Controller {

	function __construct()
	{
		parent::__construct();	
		
	}
		
	public function index()
	{
		if (!$this->ion_auth->logged_in()){
			redirect('auth/login', 'refresh');
		}
       
		
		$this->load->view('header');
		$this->load->view('test');
		//$this->load->view('test', $vars);
		$this->load->view('footer');
	}
}
