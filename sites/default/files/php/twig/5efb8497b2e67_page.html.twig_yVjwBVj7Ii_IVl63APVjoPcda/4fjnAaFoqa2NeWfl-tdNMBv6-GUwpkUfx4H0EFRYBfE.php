<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/preqube/templates/page.html.twig */
class __TwigTemplate_873276939c2dc1351c72414267c6e1e761bbca987c024f38c71d497b95d3d8ab extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 40];
        $filters = ["escape" => 14];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!-- Container -->
<div id=\"container\">
\t
\t<!-- Start Header -->
\t<div class=\"hidden-header\"></div>
\t<header class=\"clearfix\">
\t\t
\t\t<!-- Start Top Bar -->
\t\t<div class=\"top-bar\">
\t\t\t<div class=\"container\">
\t\t\t\t<div class=\"row\">
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t";
        // line 14
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_top", [])), "html", null, true);
        echo "
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<!-- End Top Bar -->
\t  
\t\t<!-- Start Header ( Logo & Naviagtion ) -->
\t\t<div class=\"navbar navbar-default navbar-top\">
\t\t\t\t<div class=\"container\">
\t\t\t\t\t";
        // line 24
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
        echo "
                        <!-- End Search -->
                        <!-- Start Navigation List -->
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>
\t\t<!-- End Header ( Logo & Naviagtion ) -->
\t  
\t</header>
\t<!-- End Header -->
\t
\t";
        // line 35
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "banner", [])), "html", null, true);
        echo "
\t
\t
\t<div id=\"content\">
\t
\t\t";
        // line 40
        if ( !($context["is_front"] ?? null)) {
            echo "\t\t
\t\t<div class=\"container\">
\t\t\t<div class=\"page-content\">
\t\t ";
        }
        // line 44
        echo "\t\t 
\t\t 
\t\t";
        // line 46
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
\t\t\t
\t\t
\t\t";
        // line 49
        if ( !($context["is_front"] ?? null)) {
            echo "\t\t
\t\t\t</div>
\t\t</div>
\t\t ";
        }
        // line 53
        echo "\t\t
\t</div>
      
\t
\t<!-- Start Footer -->
\t<footer>
\t\t<div class=\"container\">
\t\t\t<div class=\"row footer-widgets\">
\t\t\t  
\t\t\t\t";
        // line 62
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
        echo "
\t\t\t  
\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t</div>
\t\t\t<!-- End Subscribe & Social Links Widget -->
\t\t  
\t\t\t<!-- Start Copyright -->
\t\t\t<div class=\"copyright-section\">
\t\t\t\t<div class=\"row\">
\t\t\t\t
\t\t\t\t\t";
        // line 75
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_bottom", [])), "html", null, true);
        echo "
\t\t\t\t\t
\t\t\t\t\t<!--<div class=\"col-md-6\">
\t\t\t\t\t\t<ul class=\"footer-nav\">
\t\t\t\t\t\t\t<li><a href=\"#\">Sitemap</a></li>
\t\t\t\t\t\t\t<li><a href=\"#\">Privacy Policy</a></li>
\t\t\t\t\t\t\t<li><a href=\"#\">Contact</a></li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>\t\t-->\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<!-- End Copyright -->
\t\t\t
\t\t</div>
\t</footer>
\t<!-- End Footer -->
  
</div>
<!-- End Container -->

<!-- Go To Top Link -->
<a href=\"#\" class=\"back-to-top\"><i class=\"icon-up-open-1\"></i></a>
";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  156 => 75,  140 => 62,  129 => 53,  122 => 49,  116 => 46,  112 => 44,  105 => 40,  97 => 35,  83 => 24,  70 => 14,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/page.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/page.html.twig");
    }
}
