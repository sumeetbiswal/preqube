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

/* themes/preqube/templates/paragraph--service_item_list.html.twig */
class __TwigTemplate_d6f45e9d6d8efb454b584757f872254f49ddb56c321b6dc9180d4102875d7fa2 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'paragraph' => [$this, 'block_paragraph'],
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["block" => 1];
        $filters = ["escape" => 7, "trim" => 7, "striptags" => 7, "render" => 7];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['block'],
                ['escape', 'trim', 'striptags', 'render'],
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
        $this->displayBlock('paragraph', $context, $blocks);
    }

    public function block_paragraph($context, array $blocks = [])
    {
        // line 2
        echo "
    ";
        // line 3
        $this->displayBlock('content', $context, $blocks);
        // line 16
        echo "  
";
    }

    // line 3
    public function block_content($context, array $blocks = [])
    {
        // line 4
        echo "
\t\t\t <div class=\"col-md-6 service-box service-icon-left-more\">
\t\t\t\t<div class=\"service-icon\">
\t\t\t\t\t<i class=\"";
        // line 7
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_icon", []))))), "html", null, true);
        echo "\"></i>
\t\t\t\t</div>
\t\t\t\t<div class=\"service-content\">
\t\t\t\t\t<h4>";
        // line 10
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_sub_title", []))))), "html", null, true);
        echo "</h4>
\t\t\t\t\t";
        // line 11
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_service_description", []))))), "html", null, true);
        echo "
\t\t\t\t</div>
\t\t\t</div>
\t\t\t 
    ";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/paragraph--service_item_list.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  91 => 11,  87 => 10,  81 => 7,  76 => 4,  73 => 3,  68 => 16,  66 => 3,  63 => 2,  57 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/paragraph--service_item_list.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/paragraph--service_item_list.html.twig");
    }
}
