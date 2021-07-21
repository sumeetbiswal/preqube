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

/* themes/preqube/templates/breadcrumb.html.twig */
class __TwigTemplate_e2ef8126e3cae387fc367ae936a87fe28d94e8dc1225afa1d91d9aab1a027796 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 12, "for" => 22];
        $filters = ["escape" => 17];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
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
        // line 10
        echo "
<!-- Start Page Banner -->
";
        // line 12
        if (($context["breadcrumb"] ?? null)) {
            // line 13
            echo "<div class=\"page-banner\" style=\"padding:25px 0; background: url('./preqube/images/background_1280.png.png') center #f9f9f9;\">
\t<div class=\"container\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-md-6\">
\t\t\t\t<h2>";
            // line 17
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["headtitle"] ?? null)), "html", null, true);
            echo "</h2>
\t\t\t\t<p>We Are Professional</p>
\t\t\t</div>
\t\t\t<div class=\"col-md-6\">
\t\t\t\t<ul class=\"breadcrumbs\">
\t\t\t\t\t";
            // line 22
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["breadcrumb"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 23
                echo "\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t";
                // line 24
                if ($this->getAttribute($context["item"], "url", [])) {
                    // line 25
                    echo "\t\t\t\t\t\t\t\t<a href=\"";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "url", [])), "html", null, true);
                    echo "\">";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                    echo "</a>
\t\t\t\t\t\t\t";
                } else {
                    // line 27
                    echo "\t\t\t\t\t\t\t\t";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                    echo "
\t\t\t\t\t\t\t";
                }
                // line 29
                echo "\t\t\t\t\t\t</li>
\t\t\t\t\t\t
\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 32
            echo "\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t</div>
</div>
";
        }
        // line 38
        echo "<!-- End Page Banner -->
";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/breadcrumb.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 38,  106 => 32,  98 => 29,  92 => 27,  84 => 25,  82 => 24,  79 => 23,  75 => 22,  67 => 17,  61 => 13,  59 => 12,  55 => 10,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/breadcrumb.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/breadcrumb.html.twig");
    }
}
